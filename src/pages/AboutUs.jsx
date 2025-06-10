import Banner from './../components/Banner';
import Navbar from "../components/Navbar.jsx"
import Content from "../components/Content.jsx"
import About from '../components/About.jsx';
import FiveD from '../components/FiveD';
import Founder from '../components/Founder.jsx';

import Footer from "../components/Footer.jsx";


function AboutUs() {
  
  return (
   <>
    <Banner/>
    <Navbar/>
    <About/>
    <Content/>
    <FiveD/>
    <Founder/>
    <Footer/>
   </>
   )
}

export default AboutUs
