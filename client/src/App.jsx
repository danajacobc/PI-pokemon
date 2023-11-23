import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
/*Components*/
import LandingPage from './components/Landing Page/LandingPage';
import Home from './components/Home Page/Home';

const App = () => {

  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App
