import styled from "styled-components";
import ViewMoreButton from "./ViewMoreButton";

const StyledPres = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2% 0;
    position:relative;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`
const TextSection = styled.div`
    margin: auto 0;
    width: 30%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px){
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

    @media screen and (max-width: 750px){
        margin: auto;
    }
`
const StyledOverview = styled.div`
    display:flex;
    flex-direction: column;
`
const StyledOverviewTitle = styled.div`
    display: flex;
    margin: 1% 4%;
    justify-content: center;
`
const StyledH3 = styled.h3`
    width: max-content;
    margin: 0 2%;
`
const StyledHr = styled.hr`
    width: 60%;
    margin: auto 0;
    color: rgb(55, 97, 189);
    background-color: rgb(55, 97, 189);
    height: 5px;
    border: none;
    border-radius: 5px;
`
const StyledGrid = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    margin: 2% 0;
`
const StyledOneProject = styled.div`
    width: 20vw;
    margin: auto;
`

const StyledOneProjectImg = styled.img`
    width: 20vw;
    height: auto;
    border-radius: 10px;
    object-fit: contain; /*will avoid distortion*/
`

const StyledGridElement = styled.div`
    text-align: center;
    margin: 2%;
`
const StyledGridImg = styled.img`
    width: 5vw;
    height: auto;
`

const StyledOneCertif = styled.div`
    width: 20vw;
    margin: auto;
    text-align: center;
`

const StyledOneCertifImg = styled.img`
    width: 10vw;
    height: auto;
`

export default function Home(){
    return(
        <>
            <title>Home | Resume</title>
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
                    <ViewMoreButton href ="/about-me" text= "Discover More About Me"/>
                </TextSection>
            </StyledPres>
            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledH3>Here are some of my Projects</StyledH3>
                    <StyledHr/>
                </StyledOverviewTitle>
                <StyledGrid>
                    <StyledOneProject>
                        <StyledOneProjectImg src = "./subway out.png" alt = "Picture of SubWay Out"/>
                        <h5>3D Escape game</h5>
                        <p>A video game where escaping from the subway is the goal.</p>
                    </StyledOneProject>
                    <ViewMoreButton href = "/projects" text= "View All Projects"/>
                    <StyledOneProject>
                        <StyledOneProjectImg src = "./wesbite artist.png" alt = "Picture of a website"/>
                        <h5>Website with WordPress</h5>
                        <p>A website to give visibility to an artist.</p>
                    </StyledOneProject>
                </StyledGrid>
            </StyledOverview>
            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledHr/>
                    <StyledH3>Some tools I used to gain experience</StyledH3>
                </StyledOverviewTitle>
                <StyledGrid>
                    <StyledGridElement>
                        <StyledGridImg src = "./logo angular.png" alt = "Angular"/>
                        <p>Angular</p>
                    </StyledGridElement>
                    <StyledGridElement>
                        <StyledGridImg src = "./logo blender.png" alt = "Blender"/>
                        <p>Blender</p>
                    </StyledGridElement>
                    <StyledGridElement>
                        <StyledGridImg src = "./logo c.png" alt = "C"/>
                        <p>C</p>
                    </StyledGridElement>
                    <StyledGridElement>
                        <StyledGridImg src = "./logo cSharp.png" alt = "C#"/>
                        <p>C#</p>
                    </StyledGridElement>
                    <StyledGridElement>
                        <StyledGridImg src = "./logo python.png" alt = "Python"/>
                        <p>Python</p>
                    </StyledGridElement>
                    <StyledGridElement>
                        <StyledGridImg src = "./logo unity.png" alt = "Unity"/>
                        <p>Unity</p>
                    </StyledGridElement>
                </StyledGrid>
                <ViewMoreButton href = "/experiences" text = "Discover All My Experience Here"/>
            </StyledOverview>
            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledH3>Several certifications I had</StyledH3>
                    <StyledHr/> 
                </StyledOverviewTitle>
                <StyledGrid>
                    <StyledOneCertif>
                        <StyledOneCertifImg src = "./cambridge logo.png" alt = "Cambridge certification"/>
                    </StyledOneCertif>
                    <ViewMoreButton href = "/certifications" text ="View All  Certifications"/>
                    <StyledOneCertif>
                        <StyledOneCertifImg src = "./instituto-cervantes.png" alt = "Instituto Cervantes certification"/>
                    </StyledOneCertif>
                </StyledGrid>
            </StyledOverview>
        </>
    )
}