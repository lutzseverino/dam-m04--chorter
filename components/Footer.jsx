import styled from "styled-components";

const StyledFooter = styled.footer`
    footer {
    text-align: center;
}

color: white;
.footer-container {
    display: flex; /* para alinear los elementos en línea */
    justify-content: space-between; /* para espaciar los elementos igualmente */
    align-items: center; /* para centrar los elementos verticalmente */
    width: 80%; /* para que el contenedor tenga un ancho del 80% */
    margin: 0 auto; /* para centrar el contenedor horizontalmente */
    
}

.footer-item {
    width: 30%; /* para que cada elemento tenga un ancho del 30% */
    text-align: center; /* para centrar el texto de cada elemento */
    margin-top: 4rem;
    background-color: #494a5c;

}

`;

const Footer = () => {
    return (
        <StyledFooter>
        <footer>
            <div class="footer-container">
                <div class="footer-item">Item 1</div>
                <div class="footer-item">Item 2</div>
                <div class="footer-item">Item 3</div>
            </div>
        </footer>
        </StyledFooter>
    )
}

export default Footer;