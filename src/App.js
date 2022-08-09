import { Route, Routes } from 'react-router-dom'
import TitleBar from './Layout/Header/TitleBar'
import HomePage from './Layout/Main/HomePage'
import About from './About/About'
import ArticlesShow from './Articles/ArticlesShow'
import Articles from './Articles/Articles'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import FooterPage from './Layout/Footer/FooterPage'
import './App.css';



const App = () => {
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
