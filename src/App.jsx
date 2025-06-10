
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Homepage from "./pages/Homepage.jsx";
import Career from "./pages/Career.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Products from "./pages/Products.jsx";
import { BrowserRouter, Routes, Route  } from "react-router";


function App() {
  
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="about" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="career" element={<Career />} />
      <Route path="testimonial" element={<Testimonial />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="products" element={<Products />} />
   </Routes>
   </BrowserRouter>
   </>
   )
}

export default App
