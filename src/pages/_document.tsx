import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LMW1XXP4F8"></script>

                    <script
                        type="text/javascript"
                        async
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'G-LMW1XXP4F8');`,
                        }}
                    />
                </Head>
                <body>
                    <noscript>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;