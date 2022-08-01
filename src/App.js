import './App.css';
import { Route, Routes } from 'react-router-dom'
import TitleBar from './TitleBar'
import HomePage from './HomePage'
import About from './About'
import Articles from './Articles'
import SignIn from './SignIn'
import SignUp from './SignUp'
import FooterPage from './FooterPage'



const App = () => {
  return (
    <div className="App">
      {/* navigation bar */}
      <TitleBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
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
