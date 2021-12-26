import {Carousel, Card, Container} from 'react-bootstrap';

import Navigationbar from './Navigationbar' ;
import Footer from './Footer';
const Home = () => {
    return ( 
    
     <div style={{ backgroundColor:"#FFD700"}}>


  
<br/>
<br/>

 <h1 style={{"font-family": "serif", color:'white'}}> Welcome to The Kool Plans </h1>




 <br/>
 <br/>

    {/* Carousel */}

    <Container>
     <Carousel fade>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://i.imgur.com/2ZZfFQb.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://i.imgur.com/2ZZfFQb.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://i.imgur.com/2ZZfFQb.jpg"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
</Container>
<br/>
{/* */}


<h1 style={{"font-family": "serif", color:'white'}}> Why do you need us ? </h1>

  



    <Card  style={{ width:'500px', height:'400px', left:'300px'}}>
    <Card.Img variant="top"  src="https://i.imgur.com/2ZZfFQb.jpg" />
    <Card.Body>
      <Card.Text>
        We help you to find a kool plan when you don't know what to eat
      </Card.Text>
    </Card.Body>
  </Card>
  

{/* card2 */}



    <Card  style={{ width:'500px', height:'400px', left:'800px'}}>
    <Card.Img variant="top"  src="https://i.imgur.com/2ZZfFQb.jpg" />
    <Card.Body>
      <Card.Text>
       We target the food that fits your needs and make sure to meet 
       your expecations 
      </Card.Text>
    </Card.Body>
  </Card>
  


{/* Card3 */}  


    <Card  style={{ width:'500px', height:'400px', left:'300px'}}>
    <Card.Img variant="top"  src="https://i.imgur.com/2ZZfFQb.jpg" />
    <Card.Body>
      <Card.Text>
       Our goal is to assure that you have great experience
      </Card.Text>
    </Card.Body>
  </Card>
  


{/* */}

<br/>
<iframe src="https://giphy.com/embed/12uXi1GXBibALC" width="480" height="272" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
 
 <br/>
<h4 style={{"font-family": "serif", color:'white'}} > You after using Kool plans  </h4>
<br/>

<Footer/>
 
 
        </div>
     );
}
 
export default Home;