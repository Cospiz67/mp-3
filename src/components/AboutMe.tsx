import styled from "styled-components";
import {StyledPres, TextSection, StyledOverview, StyledOverviewTitle, StyledH3, StyledHr} from "./StyledComponents";

const StyledImg = styled.img`
    width: 15vw;
    height:auto;
    border-radius: 5%;
    margin: 0 5%;
    object-fit: contain;

    @media screen and (max-width: 750px){
        margin: auto;
    }
`
const StyledOverviewP = styled.p`
    margin: 2% auto;
    width: 80%;
    justify-content: center;
    text-align: justify;
`
const StyledOverviewImg = styled.img`
    width: 20vw;
`
const StyledSeparationContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    margin: auto;
`
const StyledSeparationContentP = styled.p`
    margin: 2% auto;
    width: 40%;
    justify-content: center;
    text-align: justify;
`

export default function AboutMe(){
    return(
        <>  
            <title>about-me | Resume</title>
            <StyledPres>
                <StyledImg src="./myPicture.jpg" alt="Picture of Jeanne Durand"/>
                <TextSection>
                    <p>Hi! My name is </p>
                    <h1>Jeanne Durand</h1>
                    <p>
                        I am a computer science student at EPITA, Paris. 
                        I am passionate about computer
                        science, digital photography,
                        cultural discoveries and science
                        in general.</p>
                </TextSection>
            </StyledPres>

            <StyledOverview>
                <StyledOverviewTitle>   
                    <StyledH3>Education</StyledH3>
                    <StyledHr/> 
                </StyledOverviewTitle>
                <StyledOverviewP>
                    I obtained my French high school diploma with mathematics, physics
                    and chemistry as my majors. I received the honorable mention of the
                    jury and was the valedictorian of my promotion. 
                </StyledOverviewP>
                <StyledSeparationContent>
                    <StyledOverviewImg src = "./Honor Roll Certificate.jpg" alt = "Honor roll certificate"/>
                    <StyledSeparationContentP>
                        In parallel to my French diploma, I pursued an American high school
                        diploma, for which I also got the honors mention. This opportunity
                        allowed me to discover American culture and to deepen my
                        knowledge of the English language.
                    </StyledSeparationContentP>
                </StyledSeparationContent>
            </StyledOverview>

            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledHr/>
                    <StyledH3>Current Studies</StyledH3>
                </StyledOverviewTitle>
                <StyledOverviewP>
                    I am curious and I like to learn new notions. That is why science holds
                    a special place in my academic career. I have always been fascinated
                    and interested in computer science because it is a way to combine
                    curiosity and reflection in order to solve problems efficiently.
                </StyledOverviewP>
                <StyledSeparationContent>
                    <StyledSeparationContentP>
                        Currently, I am a second year student at EPITA,
                        an engineering school. Being able to pursue my
                        studies at EPITA helps me improve my hard
                        skills but also my soft skills.
                    </StyledSeparationContentP>
                    <StyledOverviewImg src="./Epita logo.png" alt ="Logo of Epita"/>
                </StyledSeparationContent>
                <StyledOverviewP>
                    In addition to technical courses such as mathematics, algorithmic,
                    physics and programming, I can continue to enhance my communication
                    abilities, my time management and also my English proficiency.
                </StyledOverviewP>
            </StyledOverview>

            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledH3>Semester Abroad</StyledH3>
                    <StyledHr/> 
                </StyledOverviewTitle>
                <StyledSeparationContent>
                    <StyledOverviewImg src = "./BU logo.svg" alt = "BU logo"/>
                    <StyledSeparationContentP>
                        I am studying for a semester abroad from January to May 2026 at Boston University.
                        This will allow me to seek new opportunities for my professional career, 
                        develop new technical and social skills and discover a new culture.
                    </StyledSeparationContentP>
                </StyledSeparationContent>
            </StyledOverview>
        </>
    )
}