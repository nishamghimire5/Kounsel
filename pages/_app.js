import '../styles/globals.css'
import '../styles/cards.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bgimage.css';
import '../styles/articles.css';
import Layout from './layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
