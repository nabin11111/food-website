import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import AboutUs  from './Components/AboutUs';
import Product from './Components/Product';
import Review from './Components/Review';
import ContactUs from './Components/ContactUs';
import Blog from "./Components/Blog"
import Footer from "./Components/Footer"
function App() {
  return (
    <>

      <Navbar/>
     <Home/>
     <AboutUs/>
     <Menu/>
     <Product/>
     <Review/>
      <ContactUs/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
