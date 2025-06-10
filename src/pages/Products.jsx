import Banner from '../components/Banner.jsx';
import Navbar from "../components/Navbar.jsx"
import ProductsPage from '../components/ProductsPage.jsx';
import Footer from '../components/Footer.jsx';
import ProductsList from './../components/ProductsList';



function Products() {  
  return (
   <>
    <Banner/>
    <Navbar/>
    <ProductsPage/>
    <ProductsList/>
    <Footer/>
   </>
   )
}

export default Products
