import './App.css';
import TitleBar from './TitleBar'
import HomePage from './HomePage'
import FooterPage from './FooterPage'
import Cards from './Cards'
import Testimonials from './Testimonials'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <TitleBar />
      <HomePage />
      <Cards />
      <Testimonials />
      <FooterPage />
    </div>
  );
}

export default App;
