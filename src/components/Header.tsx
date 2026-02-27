import styled from "styled-components";

const StyledHeader= styled.div`
    padding:1% 2%;
    background-color: rgb(55, 97, 189);
    text-align: left;

    @media screen and (max-width: 750px){
        text-align: center;
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <h1>Jeanne Durand</h1>
            <p>Online resume</p>
        </StyledHeader>
    )
}