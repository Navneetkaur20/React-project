
import './App.css';

import Home from './Pages/home';
import Services from './Pages/Services';
import Contact from './Pages/contact';
import About from './Pages/about';
import  Header from './Components/Header/header';
import "./assets/css/icofont.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SDetail from './Pages/SDetail';
import Footer from './Components/Footer/footer';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';
function App() {
      
useEffect(()=>{
  AOS.init({ offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700,});

})
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
       <Switch>
       <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route  path="/services" component={Services}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/sdetails/:id" component={SDetail}/>
        
       </Switch>
       <Footer/>
      </BrowserRouter>


    
    </div>
  )
}

export default App;
