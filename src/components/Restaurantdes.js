import { useState } from 'react';
import { useParams } from 'react-router-dom'

import React from 'react';
import Stack from '@mui/material/Stack';

import Footer from './Footer';

const Restaurantdes =  (props) => {

      const  {id}= useParams();
            const RestaurantList =  JSON.parse(localStorage.getItem('RestaurantList'))
       const Restaurant = RestaurantList.find((item)=>{return item._id == id});
            
          console.log(Restaurant)
 

 

      return (
             

         <div  style={{backgroundColor:"#182952"}}>
              
               <br/>
             
               <h1 style={{color:"white", fontFamily:"serif"}}> These Are Restaurants Details  </h1>
               <br/>

            <Stack
  direction="row"
  ml={20}
  alignItems="flex-start"
  
  spacing={20}
>  
       <img className="Restaurantimage" src={Restaurant.image} alt="" style={{ width:"500px", height:"500px"}}/>
        
          
     <div className="details">  
       <h4 style={{color:"white", fontFamily:"serif"}}>Name:</h4> <h6 style={{color:"white"}}> {Restaurant.name}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Description: </h4> <h6 style={{color:"white"}}>{Restaurant.description}</h6>
         <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Location: </h4>  <h6 style={{color:"white"}}> {Restaurant.location}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Working Hour: </h4> <h6 style={{color:"white"}}> {Restaurant.workinghour}</h6>
        <br/>
        <h4 style={{color:"white", fontFamily:"serif"}}>Rate: </h4>  <h6 style={{color:"white"}}>{Restaurant.rate}</h6>
                </div>
               
         </Stack>  

         <br/>
         <br/> 
      
          <Footer/>   
         </div>

      );
}
 
export default Restaurantdes;