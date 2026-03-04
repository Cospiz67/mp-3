import styled from "styled-components";
import { Link } from "react-router";

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

const StyledLink = styled(Link)`
    &:hover{
        color: rgb(206, 214, 233);
        cursor: pointer;
    }
`

export default function Nav(){
    return (
            <StyledNav>
                <StyledUl>
                    <StyledLi><StyledLink to ="/">Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink to ="/about-me">About me</StyledLink></StyledLi>
                    <StyledLi><StyledLink to ="/projects">Projects</StyledLink></StyledLi>
                    <StyledLi><StyledLink to ="/experiences">Experiences</StyledLink></StyledLi>
                    <StyledLi><StyledLink to ="/certifications">Certifications</StyledLink></StyledLi>
                    <StyledLi><StyledLink to ="/contact">Contact</StyledLink></StyledLi>
                </StyledUl>
            </StyledNav>
    ) 
}