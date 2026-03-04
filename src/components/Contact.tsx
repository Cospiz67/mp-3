import styled from "styled-components";

const StyledAImg = styled.img`
    width:10vw;
    padding: 5%;
`
const StyledTitleH3 = styled.h3`
    text-align: center;
    margin:2%;
`
const StyledOverview = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const StyledOverviewA = styled.a`
    margin: 0 5%;
    &:hover{
        border: 5px solid rgb(206, 214, 233);
        border-radius: 5%;
`

const StyledText = styled.p`
    width:50%;
    text-align: center;
    margin:auto;
`


export default function Contact(){
    return(
        <>
            <title>Contact | Resume</title>
            <StyledTitleH3>If you have any questions, feel free to contact me!</StyledTitleH3>
            <StyledOverview>
                <StyledOverviewA href ="https://www.linkedin.com/in/jeannedrd/" target="_blank">
                    <StyledAImg src="./linkedin logo.png" alt="Link to my LinkedIn profile"/>
                </StyledOverviewA>
                <StyledOverviewA href ="https://github.com/Cospiz67" target="_blank">
                    <StyledAImg src="./logo github.png" alt="Link to my GitHub profile"/>
                </StyledOverviewA>
            </StyledOverview>
            <StyledText>Whether it is a small detail or an essential question,
                I will be happy to help you, so do not hesitate to contact me!
            </StyledText>
        </>

    )
}