import './App.css';
import TitleBar from './TitleBar'
import HomePage from './HomePage'
import FooterPage from './FooterPage'
import Cards from './Cards'
import Testimonials from './Testimonials'
import {useState} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <TitleBar />
      <HomePage />
      <Cards text = "test data"/>
      <Testimonials />
      <FooterPage />
    </div>
  );
}

export default App;
