import Hero from "../components/Hero.jsx"
import Content from "../components/Content.jsx"
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

function Homepage() {
  
  return (
   <>
    <Hero/>
    <Stats/>
    <Content/>
    <CTA/>
    <Testimonials/>
    <Footer/>
   </>
   )
}

export default Homepage
