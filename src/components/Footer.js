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
      <p style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px",
                    }}>
        From the time we came into existence, our only aim was to provide top-notch IT solutions to small and medium sized companies that are lacking behind with the current technological advancements.
      </p>
      <Container>
        <Row>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Software Testing Services</FooterLink>
            <FooterLink href="#">Application Development</FooterLink>
            <FooterLink href="#">Product Development</FooterLink>
          </Column>
          <Column>
            <Heading>Useful Links</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Services</FooterLink>
            <FooterLink href="#">Software Testing SErvices</FooterLink> 
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;