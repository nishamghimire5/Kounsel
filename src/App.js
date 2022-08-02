import './App.css';
import { Route, Routes } from 'react-router-dom'
import TitleBar from './Layout/Header/TitleBar'
import HomePage from './Layout/Main/HomePage'
import About from './About/About'
import ArticlesShow from './Articles/ArticlesShow'
import Articles from './Articles/Articles'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import FooterPage from './Layout/Footer/FooterPage'



const App = () => {
  return (
    <div className="App">
      {/* navigation bar */}
      <TitleBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/articlesshow" element={<ArticlesShow />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/singup" element={<SignUp />} />
        </Routes>
      </div>
      {/* Homepage
      <HomePage /> */}
      {/* Footer */}
      <FooterPage />
    </div>
  );
}

export default App;
