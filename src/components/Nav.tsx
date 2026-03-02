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

const StyledA = styled.a`
    &:hover{
        color: rgb(206, 214, 233);
        cursor: pointer;
    }
`

export default function Nav(){
    return (
            <StyledNav>
                <StyledUl>
                    <StyledLi><StyledA href ="/">Home</StyledA></StyledLi>
                    <StyledLi><StyledA href ="/about-me">About me</StyledA></StyledLi>
                    <StyledLi><StyledA href ="/projects">Projects</StyledA></StyledLi>
                    <StyledLi><StyledA href ="/experiences">Experiences</StyledA></StyledLi>
                    <StyledLi><StyledA href ="/certifications">Certifications</StyledA></StyledLi>
                    <StyledLi><StyledA href ="/contact">Contact</StyledA></StyledLi>
                </StyledUl>
            </StyledNav>
    ) 
}