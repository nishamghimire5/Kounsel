import '../styles/globals.css'
import '../styles/cards.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bgimage.css';
import '../styles/articles.css';
import Layout from './layout/layout';
import {SessionProvider} from 'next-auth/react';
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps, session }) {
  return (
   
    <SessionProvider session={session}>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    <Layout >
        <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
