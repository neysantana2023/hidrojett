import React from "react";
import { BtnWhatsApp } from "../componentes/whatsApp";
import sliderinternofundojpg from "../assets/images/slider-interno-fundo.jpg";
import OrcamentoGratis from "../componentes/orcamentoGratis";
import { BtnLigueAgora } from "../componentes/ligueAgora";

const Home: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <section className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">

                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center" style={{ "height": "100px !important" }}>
                        <BtnWhatsApp />
                        <BtnLigueAgora />
                    </div>

                </div>
            </section>

            <section className="ftco-section bg-light">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper px-md-4">
                                <div className="row mb-5">
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Endereço:</span> Rua Narain Singh Luschini, 204 - Parque Continental II
                                                    Guarulhos - SP</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Telefone:</span>
                                                    <a href="tel://5511910152082">91015-2082</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Email:</span> <a href="mailto:desentupidoraramil@gmail.com">
                                                    desentupidoraramil@gmail.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                            <div className="text">
                                                <p><span>Website</span> <a href="#">www.sambaibadesentupidora.com.br</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OrcamentoGratis />
            </section>
        </React.Fragment>

    )
}

export default Home;