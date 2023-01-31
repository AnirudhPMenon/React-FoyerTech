import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import CRMFarm from './CRMFarm';
import Services from './Services';
import Career from './Career';
import Contact from './Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from "styled-components";

function App() {

  const theme={
    colors:{
      heading: "rgb(1,33,71)",
      text:"rgb(1,33,71)",
      white: "#fff",
      black: "#212529",
      helper: "#ff2851",
      bg:" rgb(249 249 255)",
      footer_bg:" #0a1435",
      btn:"rgb(1,33,71)",
      border: "#212529",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(13, 139, 205) 0%, rgb(98 189 252) 100%",
      shadow: "rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:" rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile: "768px", tab:"998px"
    },
  };


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/crmfarm" element={<CRMFarm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
