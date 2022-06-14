import "../styles/globals.scss";
import {Layout} from "../components/Layout/Layout";
import Head from "next/head";


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>My Floor</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp;
