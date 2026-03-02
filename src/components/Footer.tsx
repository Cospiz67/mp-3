import styled from "styled-components";

const StyledFooter= styled.div`
    padding:1% 2%;
    background-color: rgb(55, 97, 189);
    text-align: center;
`
const StyledA = styled.a`
    text-decoration: underline;
`

export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Jeanne Durand <StyledA href = "https://creativecommons.org/licenses/by-nc-nd/4.0/">Credits</StyledA> &copy; </p>
        </StyledFooter>
    )
}