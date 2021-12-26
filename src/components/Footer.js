import React from "react";
 
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   marginLeft: "400px" }}>
    Koolplans.tn
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Our Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Restaurants</FooterLink>
            <FooterLink href="#">CoffeeShops</FooterLink>
          
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Koolplans@gmail.com</FooterLink>
            <FooterLink href="#">93570188 - 99593420 </FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
            <i class="fab fa-facebook"></i>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>

            </FooterLink>
            <FooterLink href="#">
            <i class="fab fa-instagram"></i>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              
            </FooterLink>
           
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;