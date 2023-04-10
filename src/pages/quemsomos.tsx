import React, { Fragment } from "react"
import sliderinternofundojpg from "../assets/images/slider-interno-fundo.jpg"
import desentupidoradeesgotoemsapopembajpg from "../assets/images/desentupidora-de-esgoto-em-sapopemba.jpg";
import { BtnWhatsApp } from "../componentes/whatsApp";
import BntFaleConosco from "../componentes/faleConosco";

const QuemSomos: React.FC<{}> = () => {
    return (
        <Fragment>
            <section className="hero-wrap hero-wrap-2" style={{ "backgroundImage": `url(${sliderinternofundojpg})` }}
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 mb-5 text-center">
                            <h1 className="mb-0 bread">QUEM SOMOS</h1>
                        </div>
                    </div>
                    <BtnWhatsApp />
                    <BntFaleConosco />
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-7 heading-section text-center ">
                            <span className="subheading">A Empresa</span>
                            <h2>Missão, Visão e Valores</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-stretch ">
                            <div className="services-2 text-center">
                                <div className="icon-wrap">
                                    <div className="mini-icon d-flex align-items-center justify-content-center"><span
                                        className="flaticon-stay-home"></span></div>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-stay-home"></span>
                                    </div>
                                </div>
                                <h2>Missão</h2>
                                <p>Prestar serviços de Saneamento Ambiental de forma sustentável.</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="services-2 text-center">
                                <div className="icon-wrap">
                                    <div className="mini-icon d-flex align-items-center justify-content-center"><span
                                        className="flaticon-stats"></span></div>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-stats"></span>
                                    </div>
                                </div>
                                <h2>Visão</h2>
                                <p>Ser uma empresa de excelência, referência no mercado de dedetização e desentupimento
                                    comprometida com o bem-estar do cliente.</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="services-2 text-center">
                                <div className="icon-wrap">
                                    <div className="mini-icon d-flex align-items-center justify-content-center"><span
                                        className="flaticon-auction"></span></div>
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-auction"></span>
                                    </div>
                                </div>
                                <h2>Valores</h2>
                                <p>Exercer suas atribuições com dedicação, ética e respeito.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="img img-3 w-100 d-flex justify-content-center align-items-center"
                                style={{ "backgroundImage": `url(${desentupidoradeesgotoemsapopembajpg})`, "position": "relative" }}>

                            </div>
                        </div>
                        <div className="col-md-6 wrap-about">
                            <div className="bg-light px-3 px-md-5 py-5 ">
                                <div className="heading-section">
                                    <p className="subheading">Quem Somos</p>
                                    <p className="mb-2">Somos movidos pelo desafio de promover a cada dia serviços de qualidade e
                                        eficiência</p>
                                    <div>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="services d-flex w-100">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="flaticon-lawyer"></span>
                                                    </div>
                                                    <div className="text pl-2">
                                                        <h2>Missão</h2>
                                                        <p>Prestar serviços de Saneamento Ambiental de forma sustentável e de
                                                            desentupimento de encanamentos, contribuindo assim, para a melhoria
                                                            da qualidade de vida.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="services d-flex w-100">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="flaticon-discount"></span>
                                                    </div>
                                                    <div className="text pl-2">
                                                        <h2>Visão</h2>
                                                        <p>Ser uma empresa de excelência, referência no mercado desentupimento
                                                            comprometida com o bem-estar do cliente, e prezando sempre, pela
                                                            qualidade do serviço prestado.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="services d-flex w-100">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="flaticon-auction"></span>
                                                    </div>
                                                    <div className="text pl-2">
                                                        <h2>Valores</h2>
                                                        <p>Exercer suas atribuições com dedicação, ética e respeito.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="subheading">Comprometida com o bem-estar do cliente.</p>
                                        <p>Somos movidos pelo desafio de promover a cada dia serviços de qualidade e eficiência,
                                            fazendo a diferença, respeitando o consumidor, garantindo por escrito serviços de
                                            qualidade a sociedade com competência, ética, cordialidade e respeito à diversidade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>)
}

export default QuemSomos;