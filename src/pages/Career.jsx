import Banner from '../components/Banner.jsx';
import Navbar from "../components/Navbar.jsx"
import CareerPage from "../components/CareerPage.jsx"
import CareerList from "../components/CareerList.jsx"
import Resume from '../components/Resume.jsx';
import Footer from '../components/Footer.jsx';



function Career() {  
  return (
   <>
    <Banner/>
    <Navbar/>
    <CareerPage/>
    <CareerList/>
    <Resume/>
    <Footer/>
   </>
   )
}

export default Career
