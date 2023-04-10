
import Head from "next/head";
import React from "react";
import AppFooter from "./footer";
import HeaderApp from "./headerApp";
import { WhatsAppFlutuante } from "./whatsApp";

const Template: React.FC<any> = (props: { children: any }) => {

    return (
        <React.Fragment>
            <Head>
                <title>Desentupidora Ramil - Desentupidora 24 horas - Faça seu orçamento agora mesmo</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="preload" as="font" href="fonts/flaticon/font/Flaticon.woff" type="font/woff2" crossOrigin="anonymous" />

                <link rel="stylesheet" href="https://d36p6ty9wanxdj.cloudfront.net/css/animate.css" media="screen" />
                <link rel="stylesheet" href="https://d36p6ty9wanxdj.cloudfront.net/css/font.css" media="screen" />
                <link rel="stylesheet" href="https://d36p6ty9wanxdj.cloudfront.net/css/owl.carousel.min.css" media="screen" />
                <link rel="stylesheet" href="https://d36p6ty9wanxdj.cloudfront.net/css/owl.theme.default.min.css" media="screen" />
                <link rel="canonical" href="https://www.desentupidoraramil.com.br" />
                <link rel="shortcut icon" href="favicon.ico" />

                <meta name="description" content="A desentupidora ramil atua no mercado de dentupimento de pia, ralo, vaso sanitário, esgoto, caixas de gordura e entre outros serviços que prezam pela sua saúde!" />
                <meta name="keywords" content="Desentupidora Zona Norte,Desentupimento Zona Sul,Rf Desentupidora,desentupimento,manutenção predial,encanamento,desentupidora,desentupir vaso,desentupir pia,desentupidor de vaso,desentupir privada,desentupimentos,vaso entupido,desentupidora preço,desentupir esgoto,desentupidora zona leste,desentupidora de vaso,desentupidora na zona leste,desentupidora em são paulo,desentupir rede de esgoto,empresa de desentupimento,desentupimentos de esgotos,desentupir encanamento,desentupidora 24h,telefone de desentupidora,desentupidor de vaso preço,desentupidor de banheiro,serviços de manutenção predial,preço para desentupir vaso sanitario,desentupidora 24 horas zona leste" />
                <meta name="geo.position" content="-23.428520, -46.550968" />
                <meta name="geo.placename" content="Guarulhos-São Paulo" />
                <meta name="geo.region" content="SP-BR" />
                <meta name="ICBM" content="-23.428520, -46.550968" />
                <meta name="robots" content="index, follow" />
                <meta name="rating" content="General" />
                <meta name="revisit-after" content="7 days" />
                <meta name="author" content="Rf Desentupidora" />
                <meta property="og:region" content="Brasil" />
                <meta property="og:title" content="Rf Desentupidora" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.desentupidoraramil.com.br/" />
                <meta property="og:description" content="A Rf Desentupidora atua no mercado de desentupimento em Geral e entre outros serviços que prezam pela sua saúde!" />
                <meta property="og:site_name" content="Rf Desentupidora" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://www.desentupidoraramil.com.br/" />
                <meta name="twitter:title" content="Rf Desentupidora" />
                <meta name="twitter:description" content="A desentupidora ramil Desentupidora atua no mercado de desentupimento em Geral e entre outros serviços que prezam pela sua saúde!" />
            </Head>
            <section>
                <HeaderApp />
                <WhatsAppFlutuante />
                    {props.children}
                <AppFooter />
            </section>
        </React.Fragment>
    )

}

export default Template;
