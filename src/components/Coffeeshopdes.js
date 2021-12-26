import { useState } from 'react';
import { useParams } from 'react-router-dom'

import React from 'react';
import Stack from '@mui/material/Stack';

import Footer from './Footer';

const Coffeeshopdes =  (props) => {

      const  {id}= useParams();
            const CoffeeshopList =  JSON.parse(localStorage.getItem('CoffeeshopList'))
       const Coffeeshop = CoffeeshopList.find((item)=>{return item._id == id});
            
          console.log(Coffeeshop)
 

 

      return (
             

         <div  style={{backgroundColor:"#182952"}}>
              
               <br/>
             
               <h1 style={{color:"white", fontFamily:"serif"}}> These Are Coffeeshops Details  </h1>
               <br/>

            <Stack
  direction="row"
  ml={20}
  alignItems="flex-start"
  
  spacing={20}
>  
       <img className="Coffeeshopimage" src={Coffeeshop.image} alt="" style={{ width:"500px", height:"500px"}}/>
        
          
       <div className="details">  
       <h4 style={{color:"white", fontFamily:"serif"}}>Name:</h4> <h6 style={{color:"white"}}> {Coffeeshop.name}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Description: </h4> <h6 style={{color:"white"}}>{Coffeeshop.description}</h6>
         <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Location: </h4>  <h6 style={{color:"white"}}> {Coffeeshop.location}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Working Hour: </h4> <h6 style={{color:"white"}}> {Coffeeshop.workinghour}</h6>
        <br/>
        <h4 style={{color:"white", fontFamily:"serif"}}>Rate: </h4>  <h6 style={{color:"white"}}>{Coffeeshop.rate}</h6>
                </div>
               
         </Stack>  

         <br/>
         <br/> 
      
          <Footer/>   
         </div>

      );
}
 
export default Coffeeshopdes;