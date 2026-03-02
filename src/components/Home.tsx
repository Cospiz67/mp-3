import styled from "styled-components";
import ViewMoreButton from "./ViewMoreButton";

const StyledPres = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2% 0;
    position:relative;

    @media(){
        flex-direction: column;
    }
`
const TextSection = styled.div`
    margin: auto 0;
    width: 30%;
    display: flex;
    flex-direction: column;

    @media(){
        width:70%;
        margin: 0 auto;
    }
`
const StyledImg = styled.img`
    width: 15vw;
    height:auto;
    border-radius: 5%;
    margin: 0 5%;
    object-fit: contain;

    @media(){
        margin: auto;
    }
`

export default function Home(){
    return(
        <StyledPres>
            <StyledImg src="./myPicture.jpg" alt="Picture of Jeanne Durand"/>
            <TextSection>
                <p>Hi! My name is </p>
                <h1>Jeanne Durand</h1>
                <p> I am a computer science student at EPITA, Paris. 
                    I am passionate about computer
                    science, digital photography,
                    cultural discoveries and science
                    in general.</p>
                <ViewMoreButton text= "Discover More About Me"/>
            </TextSection>
        </StyledPres>
    )
}