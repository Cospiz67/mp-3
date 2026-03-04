import styled from "styled-components";
import GridElement from "./GridElement";

const StyledTitleH3 = styled.h3`
    text-align: center;
    margin:2%;
` 
const StyledGrid = styled.div`
    display:grid;
    grid-template-columns: auto auto auto auto auto;
    margin: 2% 0;
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

const StyledOneProject = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 1% 2%;
`
const TextSection = styled.div`
    margin: auto 0;
    width: 30%;
    display: flex;
    flex-direction: column;
`

const StyledOneProjectImg = styled.img`
    margin: 2%;
    width: 20vw;
    height: auto;
    border-radius: 10px;
    object-fit: contain;
`

const StyledOneProjectP = styled.p`
    width: 60%;
    text-align: justify;
    padding: 2%;
    margin: auto;
`

export default function Experience(){
    return(
        <>
            <title>Experience | Resume</title>
            <StyledTitleH3>I gained experience by using those tools:</StyledTitleH3>
            <StyledGrid>
                <GridElement src ="./logo angular.png" alt = "Angular"/>
                <GridElement src = "./logo blender.png" alt = "Blender"/>
                <GridElement src = "./logo c.png" alt = "C"/>
                <GridElement src = "./logo cSharp.png" alt = "C#"/>
                <GridElement src = "./logo css.png" alt = "CSS"/>
                <GridElement src = "./logo devExpress.png" alt = "DevExpress"/>
                <GridElement src = "./logo git.png" alt = "Git"/>
                <GridElement src = "./logo github.png" alt = "GitHub"/>
                <GridElement src = "./logo js.png" alt = "JavaScript"/>
                <GridElement src = "./logo html.png" alt = "HTML"/>
                <GridElement src = "./logo ocaml.png" alt = "Ocaml"/>
                <GridElement src = "./logo mySQL.png" alt = "MySQL"/>
                <GridElement src = "./logo python.png" alt = "Python"/>
                <GridElement src = "./logo typescript.png" alt = "TypeScript"/>
                <GridElement src = "./logo unity.png" alt = "Unity"/>
            </StyledGrid>
            <StyledOverview>
                <StyledOverviewTitle>
                    <StyledH3>Internships</StyledH3>
                    <StyledHr/> 
                </StyledOverviewTitle>
            </StyledOverview>
            <StyledOneProject>
                <TextSection>
                    <StyledOneProjectImg src = "./sncf logo.png" alt = "Logo SNCF"/>
                    <StyledOneProjectP>2 months in 2025</StyledOneProjectP>
                </TextSection>
                <StyledOneProjectP>At SNCF, I learnt how to use new programming
                    languages such as HTML, CSS, JavaScript. I also
                    discovered how to cooperate in a large company,
                    as I was participating in the IT meetings.
                </StyledOneProjectP>
            </StyledOneProject>
            <StyledOneProject>
                <StyledOneProjectP>At Beaupeyrat, renewing the computer
                    park of the high school was my main
                    task. I was making the network
                    connections between the computers and
                    the computer servers of the school.
                </StyledOneProjectP>
                <TextSection>
                    <StyledOneProjectImg src = "./beaupeyrat logo.png" alt = "Logo beaupeyrat"/>
                    <StyledOneProjectP>1 month in 2022</StyledOneProjectP>
                </TextSection>
            </StyledOneProject>
            <StyledOneProject>
                <TextSection>
                    <StyledOneProjectImg src = "./winston logo.png" alt = "Logo Winston & Strawn"/>
                    <StyledOneProjectP>2 weeks in 2021</StyledOneProjectP>
                </TextSection>
                <StyledOneProjectP>
                    At Winston & Strawn, I was in charge of the
                    inventory management of computer
                    equipments. I was directly linked to
                    customers. Therefore, I had to learn to
                    satisfy them in the shortest possible time
                </StyledOneProjectP>
            </StyledOneProject>
        </>
    )
}