import '../styles/globals.css'
import '../styles/cards.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bgimage.css';
import '../styles/articles.css';
import Layout from './layout/layout';
import {SessionProvider} from 'next-auth/react';

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
    <Layout >
        <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
