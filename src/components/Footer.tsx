
import styled from "styled-components"

const StyledFooterH1 = styled.h1`
font-size: 1em; 
text-align: center;
color: pink;
font: roboto;

`

const anchorStyle = {
    color: "white"
}

const Footer = () => <StyledFooterH1> Made with ❤️ by Kevin Wang. <a style={anchorStyle} href="https://www.linkedin.com/in/kevinwang2002/"> LinkedIn </a> </StyledFooterH1>

export default Footer;
