
import React, { useState } from "react";
import { BtnWhatsApp } from "./whatsApp";
import { useForm, UseFormReset  } from "react-hook-form";
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2'
import { sendMessage } from "../services/messageSevice";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

type orcamentoForm = {
    name: string,
    email: string,
    tel: string,
    message: string
}

const OrcamentoGratis: React.FC<{}> = () => {

    const [process, processHandle] = useState(false)
    
    const onSubmit = (data: orcamentoForm, e: any) => {

        processHandle(true)

        var emailIsValid = new RegExp(regexEmail).test(data.email);
        var nameIsValid = data.name != null && data.name.trim() != "";

        var tellength = data.tel.replaceAll("_", "").length;
        var telIsValid = (data.tel != null && data.tel.trim() != "") && tellength >= 14;
        var messageIsValid = data.message != null && data.message.trim() != "";

        var errors: string[] = []

        if (!emailIsValid) {
            errors.push("Email invalido");
        }

        if (!nameIsValid) {
            errors.push("Nome inválido");
        }

        if (!telIsValid) {
            errors.push("Telefone invalido");
        }

        if (!messageIsValid) {
            errors.push("Mensagem inválida");
        }

        if (errors.length > 0) {

            var message: String = "";

            errors.map(x => message += `<span>${x}</span> <br />`);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: `<div style="text-align: left; width: 50%; margin: 0 auto;"> ${message} </div>`
            })
            .finally(() => {
                processHandle(false);
            });

            return;
        }

        sendMessage(data).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Obrigado por enviar está mensagem',
                text: "Entraremos em contato o mais rápido possivel."
            })
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Estamos com problema ao processar está mensagem',
                text: "Por favor, tente mais tarde."
            })
        }).finally(() => {
            processHandle(false);
            e.target.reset();
        });
    }

    const { register, handleSubmit, formState: { errors: any } } = useForm<orcamentoForm>();

    return (<div className="container" id="myanchor">
        <div className="row no-gutters">
            <div className="col-md-12">
                <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Faça um Orçamento Grátis</h3>

                    <form onSubmit={handleSubmit(onSubmit)}
                        name="contactForm"
                        className="contactForm"
                        noValidate>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="name">Nome</label>
                                    <input type="text"
                                        {...register("name")}
                                        className="form-control"
                                        name="name"
                                        placeholder="Nome" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="label" htmlFor="email">Email</label>
                                    <input type="email"
                                        {...register("email")}
                                        className="form-control"
                                        name="email"
                                        placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="subject">Telefone</label>
                                    <InputMask type="tel"
                                        {...register("tel")}
                                        className="form-control"
                                        name="tel"
                                        mask="(99) 99999-9999"
                                        placeholder="(xx) xxxxx-xxxx" >

                                    </InputMask>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="label" htmlFor="#">Mensagem</label>
                                    <textarea {...register("message")}
                                        className="form-control"
                                        cols={30}
                                        rows={4}
                                        name="message"
                                        placeholder="Escreva aqui a sua mensagem"></textarea>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-12">
                                <div className="form-group">
                                    <button type="submit"
                                            disabled={process ? true:  false}
                                            className="btn btn-primary">
                                        {!process ? "Enviar Formulário" : "Processando"}
                                    </button>
                                    <div className="submitting"></div>
                                </div>
                            </div>
                            <BtnWhatsApp />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

export default OrcamentoGratis;