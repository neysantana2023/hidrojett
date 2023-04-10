import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Template from '../componentes/template';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/flaticon.css"
import "../assets/css/font.css";
import "../assets/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Template> <Component {...pageProps} /></Template>
}

export default MyApp
