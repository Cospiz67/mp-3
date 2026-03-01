import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: rgb(91, 103, 130);
    padding: 1%;
    width: 15%;

    @media screen and (max-width: 750px){
        width: 100%;
    }
`
const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;

    @media screen and (max-width: 750px){
        padding: 0;
        text-align: center;
    }
`
const StyledLi = styled.li`
    display: block;
    padding: 10% 0;

    @media screen and (max-width: 750px){
        display: inline;
        padding: 0 2%;
    }
`

export default function Nav(){
    return (
            <StyledNav>
                <StyledUl>
                    <StyledLi>Home</StyledLi>
                    <StyledLi>About me</StyledLi>
                    <StyledLi>Projects</StyledLi>
                    <StyledLi>Experiences</StyledLi>
                    <StyledLi>Certifications</StyledLi>
                    <StyledLi>Contact</StyledLi>
                </StyledUl>
            </StyledNav>
    ) 
}