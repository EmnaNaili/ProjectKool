
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Carousel, Container, TabContent } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { red } from '@mui/material/colors';
import {Link} from 'react-router-dom';
import Footer from'./Footer'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Stack from '@mui/material/Stack';
import SearchRestaurant from './SearchRestaurant';








const Restaurantlist = () => {

   const [Restaurantlist,setRestaurantlist]=useState(

        []
    );

 React.useEffect(() => {
    axios.get('http://localhost:3002/Restaurants/Restaurant').then((response) => {
    //   setRestaurantlist(response.data);
      setRestaurantlist(response.data.response)
        localStorage.setItem('RestaurantList',JSON.stringify(response.data.response))
    });

  }, []);



   
       return(

     
             <div style={{ backgroundColor:"#182952"}}>
 <br/>
 
 <h1 style={{"font-family": "serif", color:'white'}}> Here you can find a panel of Restaurants   </h1>

  <br/>
 <br/>

    {/* Carousel */}

    <Container>
     <Carousel fade>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-s/16/7f/ee/ca/salle-restaurantlemdina.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-s/16/7f/ee/ca/salle-restaurantlemdina.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://media-cdn.tripadvisor.com/media/photo-s/16/7f/ee/ca/salle-restaurantlemdina.jpg"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
</Container>
<br/>
{/* title*/}
 
 <h1 style={{"font-family": "serif", color:'white'}}> How will we help you find a Restaurant ?   </h1>


{/*  */}
  <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white">Have look at our Restaurants suggestions</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> 🔍 Seach for your perfect Restaurant fit via our filter</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> ✔️Enter your Restaurant criteria</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color="white">😁Have good time </TimelineContent>
      </TimelineItem>
    </Timeline>

   

<br/>
<br/>
{/* title*/}

 <h1 style={{"font-family": "serif", color:'white'}}> Let us find your adequate Restaurant from our catalogue  </h1>

<br/>


 <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start"
  alignContent="space-between"
  spacing={2}
  ml={20}
  mr={20}
  flexWrap= "wrap"

>
   { Restaurantlist.map(e => 
  
 

      <Link to={`/description/${e._id}`}>
  <Card sx={{ maxWidth: 200, backgroundColor:"#577BC1", color:"black" ,maxHeight: 300, minHeight:300 , fontSize: 10, flex: "diplay", alignContent: "space-between" }}>
      <CardActionArea>
        <CardMedia style={{ height:"200px", width:"200px"}}
          component="img"
          height="140"
          image={e.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx ={{fontSize: 16 }}>
           {e.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
   
 
  
   )}
</Stack>

<br/>



<br/>

<SearchRestaurant/>
<br/>


<Footer/>
 
   </div>

   



       
    );
}
 
export default Restaurantlist;
