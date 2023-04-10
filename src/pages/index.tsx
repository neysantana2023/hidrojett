import type { NextPage } from 'next'

import OrcamentoGratis from "../componentes/orcamentoGratis";
import { BtnWhatsApp } from "../componentes/whatsApp";
import pix106png from "../assets/images/pix-106.png";
import cartoespng from "../assets/images/cartoes.png";
import Boletopng from "../assets/images/Boleto.png";
import { BntFaleConoscoMobile } from "../componentes/faleConosco";
import Image from 'next/image';
import React from 'react';
import { BtnLigueAgora } from '../componentes/ligueAgora';

const Home: NextPage = () => {

  let titulo: string = "Desentupidora 24 horas";
  return (
    <React.Fragment>

      <section className="hero-wrap" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Capa.jpg")` }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
            <div className="d-flex align-items-end">
              <div className="text w-100">
                <h1 className="mb-2">{titulo}</h1>
                <p className="mb-2">Entupiu? Nós resolvemos seu problema</p>
                <p className="mb-2">Orçamento Grátis, faça agora mesmo!! 90 dias de Garantia!, Desentupidora de
                  Pias, Esgoto, Caixa de Gordura, Ralo, Vaso
                  Sanitário e qualquer tipo de Encanamento.</p>
                <BtnWhatsApp />
                <BtnLigueAgora />
                <div className="block-left col-xs-12 col-sm-3 col-md-3 col-lg-3">
                  <BntFaleConoscoMobile />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-intro">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 d-flex">
              <div className="intro aside-stretch d-lg-flex w-100">
                <div className="icon" style={{ "float": "left" }}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40pt" height="60pt"
                    viewBox="0 0 94.000000 94.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,94.000000) scale(0.100000,-0.100000)" fill="#4682B4"
                      stroke="none">
                      <path d="M333 921 c-260 -96 -362 -406 -207 -631 29 -43 34 -58 34 -108 l0
-59 -36 -6 c-58 -10 -124 -53 -124 -82 0 -32 32 -34 75 -5 41 27 88 25 141 -6
38 -22 54 -26 103 -22 38 3 68 11 88 26 41 29 85 28 139 -4 38 -22 54 -26 103
-22 38 3 68 11 88 26 39 27 89 28 128 2 43 -29 75 -27 75 5 0 31 -58 71 -117
81 l-43 7 0 59 c0 50 5 65 34 108 115 168 89 403 -59 539 -87 79 -150 104
-270 108 -80 3 -110 -1 -152 -16z m279 -73 c75 -35 128 -85 168 -160 43 -81
53 -186 24 -269 l-19 -54 -6 115 c-6 133 -30 201 -93 263 -65 66 -108 82 -216
82 -74 0 -103 -4 -130 -19 -70 -38 -109 -77 -142 -143 -29 -59 -32 -75 -36
-181 -5 -113 -5 -115 -21 -86 -12 21 -16 56 -16 129 0 90 3 105 27 152 52 97
121 156 221 189 63 21 171 13 239 -18z m-70 -90 c71 -21 167 -127 168 -185 0
-10 -55 -13 -240 -13 -185 0 -240 3 -240 13 1 55 96 163 162 184 45 15 103 15
150 1z m-272 -332 c0 -80 6 -96 35 -96 29 0 35 16 35 96 l0 64 50 0 50 0 0
-49 c0 -50 13 -67 45 -55 11 4 15 21 15 55 l0 49 50 0 50 0 0 -64 c0 -80 6
-96 35 -96 29 0 35 16 35 96 0 57 2 64 20 64 19 0 20 -7 20 -198 0 -141 -3
-201 -12 -210 -21 -21 -28 -13 -28 27 0 79 -62 81 -68 2 -2 -23 -6 -41 -10
-39 -104 55 -141 57 -219 12 -48 -28 -89 -31 -121 -8 -21 15 -22 20 -22 215 0
192 1 199 20 199 18 0 20 -7 20 -64z"></path>
                    </g>
                  </svg>
                </div>
                <div className="text">
                  <h2>DESENTUPIMENTO DE PIAS, ESGOTOS, RALOS, CANOS E VASOS SANITÁRIO</h2>
                  <p>Desentupidora com Equipe Especializada e Atendimento 24h. Serviço com Garantia de 90
                    dias. Desentupidora de Pia, Ramal de Esgoto, Ralos, canos, vasos sanitário e tanques.
                    Atendimento Comercial. O Menor Preço da Região.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="intro color-1 d-lg-flex w-100">
                <div className="icon" style={{ "float": "left" }}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40pt" height="60pt"
                    viewBox="0 0 94.000000 88.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,88.000000) scale(0.100000,-0.100000)" fill="#4682B4"
                      stroke="none">
                      <path d="M267 837 c-82 -35 -104 -49 -133 -87 -31 -39 -33 -46 -20 -56 13 -9
16 -38 16 -177 l0 -166 -37 -3 c-38 -3 -38 -3 -41 -51 -3 -43 -1 -49 18 -54
19 -5 21 -11 16 -37 -4 -17 -12 -61 -18 -98 -11 -65 -12 -68 -39 -68 -19 0
-29 -5 -29 -15 0 -13 59 -15 470 -15 411 0 470 2 470 15 0 12 -19 15 -113 15
l-114 0 -16 93 c-21 114 -21 104 4 110 17 5 20 12 17 54 -3 48 -3 48 -40 51
l-38 3 0 85 c0 74 2 84 18 84 10 0 23 5 29 11 5 5 32 9 59 7 l49 -3 3 -42 3
-43 45 0 44 0 0 59 c0 49 -4 65 -26 90 -24 29 -30 31 -99 31 -52 0 -76 4 -85
15 -7 8 -21 15 -31 15 -11 0 -19 7 -19 15 0 8 7 15 15 15 25 0 16 33 -19 73
-25 28 -58 47 -131 77 -54 22 -105 40 -114 39 -9 0 -60 -19 -114 -42z m209
-33 c49 -19 98 -44 109 -55 19 -19 17 -19 -200 -19 -219 0 -219 0 -200 20 16
16 173 88 196 90 3 0 45 -16 95 -36z m124 -284 l0 -170 -215 0 -215 0 0 170 0
170 215 0 215 0 0 -170z m80 -225 c0 -13 -39 -15 -295 -15 -256 0 -295 2 -295
15 0 13 39 15 295 15 256 0 295 -2 295 -15z m-40 -73 c0 -16 -19 -22 -131 -42
l-130 -23 -125 23 c-105 20 -124 27 -124 42 0 17 15 18 255 18 241 0 255 -1
255 -18z m-22 -153 c108 -22 50 -29 -233 -29 -283 0 -340 7 -232 29 261 54
201 54 465 0z"></path>
                      <path d="M352 603 c-56 -80 -64 -125 -31 -167 16 -21 29 -26 64 -26 36 0 47 5
65 27 27 35 22 78 -18 142 -34 55 -53 61 -80 24z"></path>
                    </g>
                  </svg>
                </div>
                <div className="text">
                  <h2>SERVIÇO COM 90 DIAS DE GARANTIA.</h2>
                  <p>O serviços com 90 dias de garantia. Garantimos o serviço com excelente qualidade e
                    perfeição para os nossos clientes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="intro color-2 d-lg-flex w-100">
                <div className="icon" style={{ "float": "left" }}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40pt" height="60pt"
                    viewBox="0 0 67.000000 94.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,94.000000) scale(0.100000,-0.100000)" fill="#4682B4"
                      stroke="none">
                      <path d="M527 922 c-15 -16 -17 -50 -17 -270 0 -217 -2 -252 -15 -252 -12 0
-15 -19 -15 -115 0 -96 3 -115 15 -115 24 0 20 -85 -5 -110 -28 -28 -49 -31
-215 -28 -125 3 -150 5 -150 18 0 11 15 17 53 20 53 6 72 19 72 53 0 11 8 17
25 17 16 0 25 6 25 15 0 11 -12 15 -50 15 -38 0 -50 4 -50 15 0 12 16 15 85
15 69 0 85 -3 85 -15 0 -8 7 -15 15 -15 8 0 15 9 15 20 0 11 4 20 10 20 27 0
40 51 50 203 10 143 10 161 -5 184 -10 14 -26 28 -36 30 -12 4 -19 14 -19 30
0 18 -4 24 -14 20 -11 -4 -16 4 -18 31 l-3 37 -130 0 -130 0 -3 -45 c-2 -28
-6 -39 -12 -31 -10 18 -30 5 -30 -19 0 -10 -9 -22 -20 -25 -38 -12 -43 -40
-36 -194 7 -153 17 -206 41 -215 8 -3 15 -15 15 -26 0 -23 28 -27 36 -5 4 9
19 15 35 15 26 0 29 -4 29 -30 0 -26 4 -30 26 -30 19 0 25 -5 22 -17 -2 -14
-15 -19 -51 -21 -37 -2 -51 -8 -63 -28 -15 -22 -15 -26 0 -49 l16 -25 184 0
c170 0 185 2 209 20 27 21 47 74 47 123 0 15 5 27 10 27 6 0 10 42 11 103 1
86 3 95 10 58 5 -24 16 -52 25 -62 21 -23 64 -25 64 -4 0 8 -7 15 -15 15 -19
0 -33 27 -41 79 -6 37 -9 41 -35 41 l-29 0 0 244 c0 204 2 246 15 256 8 7 15
19 15 26 0 20 -34 17 -53 -4z m-227 -302 c0 -17 7 -20 46 -20 76 0 84 -9 83
-93 0 -40 -4 -112 -7 -160 -9 -118 -7 -117 -188 -117 -190 0 -181 -9 -194 184
-12 179 -9 186 77 186 46 0 53 2 53 20 0 18 7 20 65 20 58 0 65 -2 65 -20z"></path>
                    </g>
                  </svg>
                </div>
                <div className="text">
                  <h2>DESENTUPIMENTO DE VASOS SANITÁRIOS, PIA, RALOS E ENTRE OUTROS</h2>
                  <p>Desobstrução, limpeza e manutenção de encanamentos e tubulações com qualquer quantidade
                    de curvas ou em qualquer ângulo existente, com segurança e eficiência para o cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <header className="heading-section text-center">
          <h3>FACILITAMOS O SEU PAGAMENTO</h3>
        </header>
        <div className="container-fluid">
          <div className="col-md-12 d-flex">
            <div className="intro aside-stretch" style={{ "background": "#16232f", "textAlign": "center" }}>

              <div className="text">
                <div className="row">
                  <div className="col-md-4">
                    <Image src={pix106png} alt="Pix" width="400px" height={"140px"} style={{ "marginTop": "2%" }} />
                  </div>
                  <div className="col-md-4">
                    <Image src={cartoespng} alt="Cartões" width="400px" height={"140px"} style={{ "marginTop": "2%" }} />
                  </div>
                  <div className="col-md-4">
                    <Image src={Boletopng} alt="Boleto" width="400px" height={"140px"} style={{ "marginTop": "2%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">

        <header className="heading-section text-center">
          <h3>NOSSOS SERVIÇOS</h3>
        </header>

        <div className="container">
          <hr />
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentobanheiro.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento de Banheiro</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twiter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentodecano.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento De Cano</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twiter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentoderalo.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento de Ralo</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twiter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentoindustrial.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento Industrial</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twiter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ backgroundImage: `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentosdecaixadegordura.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento de Caixa de Gordura</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twitter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentosdeesgoto.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento de Esgoto</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twitter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentosdepia.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento de Pias</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twitter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/Desentupimentodevasosanitario.jpg")` }}>
                  </div>
                </div>
                <div className="text pt-3 text-center">
                  <span className="position mb-2">Desentupimento de Vaso Sanitário</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className=""><a aria-label="Twitter"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-twitter"></span></a></li>
                      <li className=""><a aria-label="Facebook"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-facebook"></span></a></li>
                      <li className=""><a aria-label="Google"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-google"></span></a></li>
                      <li className=""><a aria-label="Instagram"
                        href="https://www.facebook.com/sambaibadesentupidora"
                        className="d-flex align-items-center justify-content-center"><span
                          className="fa fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">

        <header className="heading-section text-center">
          <h3>REGIÃO DE SÃO PAULO E DA GRANDE SÃO PAULO</h3>
        </header>

        <div className="container">
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="row">
                <span className="h6 col-12">
                  <a href="desentupidora-na-zona-norte" aria-label="Zona norte de São Paulo">
                    <strong>DESENTUPIDORA NAZONA
                      NORTE DE SÃO PAULO</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="desentupidora-na-zona-leste" aria-label="Zona Leste de São Paulo">
                    <strong>DESENTUPIDORA NA ZONA
                      LESTE DE SÃO PAULO</strong></a>
                </span>
                <span className="h6  col-12">
                  <a href="desentupidora-na-zona-oeste" aria-label="Zona Oeste de São Paulo">
                    <strong>DESENTUPIDORA NA ZONA
                      OESTE DE SÃO PAULO</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="desentupidora-na-zona-sul" aria-label="Zona Sul de São Paulo">
                    <strong>DESENTUPIDORA NA ZONA SUL DE
                      SÃO PAULO</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="grande-sp" aria-label="Zona Sul de São Paulo"> <strong>DESENTUPIDORA EM
                    OSASCO</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="grande-sp" aria-label="Zona Sul de São Paulo"> <strong>DESENTUPIDORA NO
                    ABC</strong></a>
                </span>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <span className="h6 col-12">
                  <a href="grande-sp" aria-label="Grande São Paulo"> <strong>DESENTUPIDORA NA GRANDE SÃO
                    PAULO</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="grande-sp" aria-label="Grande São Paulo"> <strong>DESENTUPIDORA EM
                    GUARULHOS</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="desentupidora-em-atibaia" aria-label="Atibaia"> <strong>DESENTUPIDORA EM
                    ATIBAIA</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="desentupidora-em-aruja" aria-label="Aruja"> <strong>DESENTUPIDORA EM
                    ARUJÁ</strong></a>
                </span>
                <span className="h6 col-12">
                  <a href="index.html" aria-label="Aruja"> <strong>DESENTUPIDORA EM OUTRAS
                    REGIÕES</strong></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-counter ftco-section ftco-no-pt mt-4 ftco-no-pb img" id="section-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch counter-wrap ">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist"></span>
                <div className="text align-items-center">
                  <strong className="number">+</strong><strong className="number" data-number="500">500</strong>
                  <span>Clientes Satisfeitos</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch counter-wrap ">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist"></span>
                <div className="text align-items-center">
                  <strong className="number">+</strong><strong className="number" data-number="1100">1100</strong>
                  <span>Serviços Feitos</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch counter-wrap">
              <div className="block-18 py-4 w-100">
                <span className="icon flaticon-checklist"></span>
                <div className="text align-items-center">
                  <strong className="number">+</strong><strong className="number" data-number="5">5</strong>
                  <span>Anos de Experiência</span>
                </div>
              </div>
            </div>
          </div>
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

      <section>
        <div className="container">
          <h1 className="text-center">Clientes Satisfeitos</h1>
        </div>
      </section>

      <section className="ftco-section testimony-section">
        <div className="img img-bg" style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/bg_4.jpg")` }}>
        </div>
        <div className="overlay"></div>
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4">Serviço de muita qualidade, o pessoal da Ramil Desentupidora
                        realizaram o serviço de forma ágil e eficiente. Recomendo!</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ "backgroundImage": "url(https://d36p6ty9wanxdj.cloudfront.net/images/depoimentos.png)" }}>
                        </div>
                        <div className="pl-3">
                          <p className="name">Carmelite R. Fonsece</p>
                          <span className="position">Motorista de transporte escolar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-appointment ftco-section img"
        style={{ "backgroundImage": `url("https://d36p6ty9wanxdj.cloudfront.net/images/bg_2.jpg")` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-md-5">
              <div className="heading-section heading-section-white">
                <h2 className="mb-3">Solicite um orçamento Grátis</h2>
                <p>Entraremos em contao o mais rápido possivel.</p>
                <p>Marque uma visita!</p>

              </div>
            </div>
            <OrcamentoGratis />
          </div>
        </div>
      </section>
    </React.Fragment>)
}

export default Home
