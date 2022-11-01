import '../styles/globals.css'
import '../styles/cards.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Home.css';
import "../styles/ChatOnline.css";
import "../styles/messenger.css";
import "../styles/message.css";
import "../styles/conversation.css";
import '../styles/articles.css';
import '../styles/profile.css';
import '../styles/chat.css';
import '../styles/dashboard.css'
import '../styles/Home.module.css'
import "react-datepicker/dist/react-datepicker.css";
import Layout from './layout/layout';
import {SessionProvider} from 'next-auth/react';
import Head from "next/head";
import Script from "next/script";
<<<<<<< HEAD
import { useEffect } from 'react';
=======
import {useEffect} from "react";
>>>>>>> 48bb8b49a9ab185a876fa5baa2e2ce03102c6a77

function MyApp({ Component, pageProps, session }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return (
<<<<<<< HEAD
   
=======
>>>>>>> 48bb8b49a9ab185a876fa5baa2e2ce03102c6a77
    <SessionProvider session={session}>
    <Layout >
        <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
