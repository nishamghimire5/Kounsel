import './App.css';
import TitleBar from './TitleBar'
import HomePage from './HomePage'
import FooterPage from './FooterPage'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <TitleBar />
      <HomePage />
      <FooterPage />
    </div>
  );
}

export default App;
