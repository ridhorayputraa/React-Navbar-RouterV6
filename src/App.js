import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Service'
import Skilss from './pages/Skils'


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/about" element={<About/>} exact></Route>
          <Route path="/services" element={<Services/>} exact></Route>
          <Route path="/skilss" element={<Skilss/>} exact></Route>
          <Route path="/contact" element={<Contact/>} exact></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
