import Image from 'next/image';
import Logo from "../assets/images/small/Logo_RamilDesentupidora.png";
import Head from "next/head"
import React from "react";

const HeaderApp: React.FC<{}> = ({ }) => {

    return (
        <React.Fragment>
            <Head>
                <script async type="text/javascript" src="/static/script.js"></script>
            </Head>

            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a aria-label="Home" className="navbar-brand" href={"/"}>
                        <Image src={Logo} alt="logo" width={260} height={70} />
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> <b>Menu</b>
                </button> */}

                    <div className="collapse navbar-collapse" id="ftco-nav">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a aria-label="Home" href={"/"} className="nav-link">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a aria-label="Quem Somos" href={"/quemsomos"} className="nav-link">
                                    QUEM SOMOS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a aria-label="Nossos Serviços" href={"nossosservicos"} className="nav-link">
                                    NOSSOS SERVIÇOS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a aria-label="Contato" href={"contato"} className="nav-link">
                                    CONTATO
                                </a>
                            </li>
                            <li className="nav-item">

                                <a href="tel:+5511910152082" className="nav-link" aria-label="Telefone de contato">
                                    TELEFONE: (11) 91015-2082
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default HeaderApp;