import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const Navigationbar = () => {
    return ( 
        
<Navbar  variant="light" sticky="top" bg="dark" >
    <Container>
    <Navbar.Brand href="#home">  < Link to="/home" className="link"> The Kool Plans </Link> </Navbar.Brand>
    <Nav className="me-auto">
     <Nav.Link > < Link to="/Restaurant" className="link">Restaurant </Link></Nav.Link>
      <Nav.Link>< Link to="/CoffeeShop" className="link">CoffeeShop </Link></Nav.Link>
      <Nav.Link>< Link to="/Lounges" className="link">Lounge </Link></Nav.Link>


   
    </Nav>
    </Container>
  </Navbar>
 
    
     );
}
 
export default Navigationbar;