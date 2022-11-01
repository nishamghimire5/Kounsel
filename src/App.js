import { Route, Routes } from 'react-router-dom'
import TitleBar from './Layout/Header/TitleBar'
import HomePage from './Layout/Main/HomePage'
import About from './About/About'
import ArticlesShow from './Articles/ArticlesShow'
import Articles from './Articles/Articles'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import FooterPage from './Layout/Footer/FooterPage'
import Dashboard from './Dashboard'
import './App.css';
import {useEffect} from "react";


const App = () => {
  useEffect(() => {
    typeof document !== undefined ? require('./bootstrap/dist/js/bootstrap') : null
}, [])
  return (
    <div className="App">
      {/* navigation bar */}
      <TitleBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/articlesshow" element={<ArticlesShow />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
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
