import styled from "styled-components";

const StyledFooter = styled.footer`
    footer {
}
background-color: #494a5c;
color: white;

.footer-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 80%;
    margin: 0 auto;
    background-color: #494a5c;
    height: 256px;
}


.footer-item {
    width: 30%;
    text-align: center;
    background-color: #494a5c;
}

`;

const Footer = () => {
    return (
        <StyledFooter>
        <footer>
            <div class="footer-container">
                <a class="footer-item" href="https:">Policy</a>
                <a class="footer-item" href="https:">Item 2</a>
                <a class="footer-item" href="https:">Item 3</a>
            </div>
        </footer>
        </StyledFooter>
    )
}

export default Footer;