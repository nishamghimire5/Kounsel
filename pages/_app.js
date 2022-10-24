import '../styles/globals.css'
import '../styles/cards.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bgimage.css';
import "../styles/ChatOnline.css";
import "../styles/messenger.css";
import "../styles/message.css";
import "../styles/conversation.css";
import '../styles/articles.css';
import '../styles/profile.css';
import '../styles/chat.css';
import "react-datepicker/dist/react-datepicker.css";
import Layout from './layout/layout';
import {SessionProvider} from 'next-auth/react';
import Head from "next/head";
import Script from "next/script";
import Layout from './layout/layout';
import {useEffect} from "react";

function MyApp({ Component, pageProps, session }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return (
    <SessionProvider session={session}>
    <Layout >
        <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
