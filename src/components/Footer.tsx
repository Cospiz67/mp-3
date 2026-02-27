import styled from "styled-components";

const StyledFooter= styled.div`
    padding:1% 2%;
    background-color: rgb(55, 97, 189);
    text-align: center;
`

export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Jeanne Durand <a href = "https://creativecommons.org/licenses/by-nc-nd/4.0/">Credits</a> &copy </p>
        </StyledFooter>
    )
}