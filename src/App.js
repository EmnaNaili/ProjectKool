import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurant';
import Loungelist from './components/Lounge';
import Restaurantdes from './components/Restaurantdes';
import Coffeeshoplist from './components/Coffeeshop';
import Loungedes from './components/Loungedes';
import Coffeeshopdes from './components/Coffeeshopdes';
import { useRef, useState} from "react";
import axios from 'axios';



function App() {

// const [Restaurant,setRestaurant]=useState('')




  return (
    <Router>
    <div className="App">
    <Navigationbar/>
     <Home/>
     <Footer/>
  

     <div>
     
     <Routes>
      
   <Route exact path="/Restaurant" element={<Restaurantlist/>}/>
    

       <Route exact path="/home" element={<Home/>}/>
      
     <Route  path='/description/:id' element={<Restaurantdes arr={Restaurantdes}/>  }/>

       <Route  path='/description/Lounge/:id' element={<Loungedes arr={Loungedes}/>  }/>

        <Route  path='/description/Coffeeshop/:id' element={<Coffeeshopdes/>  }/>
     <Route  path='/Coffeeshop' element={<Coffeeshoplist/>}/>

     <Route  path='/Lounge' element={<Loungelist/>}/>
 
    </Routes>

      
   
  

 </div>
       
        </div>

        </Router>
  );
}

export default App;