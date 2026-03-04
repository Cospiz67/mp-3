import styled from "styled-components";
import ViewMoreButton from "./ViewMoreButton";

const StyledH2 = styled.h2`
    text-align: center;
    margin:2%;
`
const StyledOneProject = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 1% 2%;
    margin: auto;
`

const StyledOneProjectImg = styled.img`
    margin: 2%;
    width: 20vw;
    height: auto;
    border-radius: 10px;
    object-fit: contain;

`

const TextSection = styled.div`
    width: 60%;
    text-align: justify;
    padding: 2%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
`

const ImgCapigame = styled.img`
    width:10vw;
    margin: 2%;
    height: auto;
    border-radius: 10px;
    object-fit: contain;
`

const ToolkitImg = styled.img`
    width: 4vw;
`
const ToolkitLi = styled.li`
    list-style: none;
    margin: auto;
`
const Toolkit = styled.ul`
    display: flex;
    flex-direction: row;
    padding-left: 0;
    justify-content: center;
    margin: 1%;
`

const StyledOverviewTitle = styled.div`
    width:100%;
`

export default function Projects(){
    return(
        <>
            <title>Projects | Resume</title>
            <StyledH2>Here are some of my projects:</StyledH2>
                    <StyledOneProject>
                        <StyledOneProjectImg src = "./subway out.png" alt = "Picture of SubWay Out"/>
                        <TextSection>
                            <h3>3D Escape game</h3>
                            <p>With 4 other students, I created a video
                                game and more precisely an escape-game
                                that takes place in the Parisian subway. The
                                objective of this project was to design the
                                video game in C# and to promote it as if we
                                were a true video game studio.
                            </p>
                        </TextSection>
                    </StyledOneProject>
                    <Toolkit>
                        <ToolkitLi><h5>Toolkit:</h5></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo blender.png" alt = "Blender"/></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo cSharp.png" alt = "C#"/></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo github.png" alt = "GitHub"/></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo unity.png" alt = "Unity"/></ToolkitLi>
                    </Toolkit>
                    <Toolkit>
                        <ToolkitLi><h5>My Contributions:</h5></ToolkitLi>
                        <ToolkitLi><p>Project Leader</p></ToolkitLi>
                        <ToolkitLi><p>3D Modelization</p></ToolkitLi>
                        <ToolkitLi><p>Artificial Intelligence</p></ToolkitLi>
                        <ToolkitLi><p>Scenario</p></ToolkitLi>
                        <ToolkitLi><p>Trailer</p></ToolkitLi>
                        <ToolkitLi><p>Level Design</p></ToolkitLi>
                    </Toolkit>
                    <StyledOneProject>
                        <ViewMoreButton target= {true} href="https://www.youtube.com/watch?v=CKALwMykcis" text="Watch The Trailer Here"/>
                        <ViewMoreButton target= {true} href="https://www.instagram.com/head4che.prod.co/" text="Go To Our Instagram Page"/>
                        <ViewMoreButton target= {true} href="https://head4che-prod.github.io/" text="Visit Our Website"/>
                    </StyledOneProject>
                    <StyledOneProject>
                        <StyledOneProjectImg src = "./wesbite artist.png" alt = "Picture of a website"/>
                        <TextSection>
                            <h3>Website with WordPress</h3>
                            <p>To allow an artist to have visibility on the web, I made a showcase
                                website displaying their paintings. Thanks to this, the painter now
                                has a way to promote their art differently. This website was made
                                with the online built-in hosting tool WordPress. It gave me the
                                opportunity to have a first approach to web development, but also
                                to efficiently communicate with the client to meet their
                                expectations.
                            </p>
                        </TextSection>
                    </StyledOneProject>
                    <Toolkit>
                        <ToolkitLi><h5>Toolkit:</h5></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo wordpress.png" alt = "WordPress"/></ToolkitLi>
                        <ToolkitLi><h5>My Technical Responsibilities:</h5></ToolkitLi>
                        <ToolkitLi><p>Build A Professional Website</p></ToolkitLi>
                        <ToolkitLi><p>Communicate</p></ToolkitLi>
                    </Toolkit>
                    <StyledOneProject>
                        <ViewMoreButton target= {true} href="https://marieblancheiraldi.wordpress.com/" text="Visit The Website"/>
                    </StyledOneProject>
                    <StyledOneProject>
                        <ImgCapigame src = "./capigame.png" alt = "Picture of Capigame"/>
                        <TextSection>
                            <h3>Capigame</h3>
                            <p>To extend my technical skills, I wanted to
                                learn how a mobile application was made.
                                Thanks to the mobile app development
                                platform Thunkable, I discovered this
                                aspect of computer science.
                            </p>
                        </TextSection>
                    </StyledOneProject>
                    <Toolkit>
                        <ToolkitLi><h5>Toolkit:</h5></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo thunkable.png" alt = "Thunkable"/></ToolkitLi>
                        <ToolkitLi><h5>My Technical Responsibilities:</h5></ToolkitLi>
                        <ToolkitLi><p>Block-Based Programming</p></ToolkitLi>
                        <ToolkitLi><p>Mobile Application</p></ToolkitLi>
                    </Toolkit>
                    <StyledOneProject>
                        <StyledOneProjectImg src = "./platformer.png" alt = "Picture of a platformer game"/>
                        <TextSection>
                            <h3>Platformer mini-game</h3>
                            <p>During my free time, I developed a
                                platformer mini-game thanks to GDevelop.
                                Elaborated to be played on a web browser,
                                it was by coding this mini-game that I
                                really learnt the basis of a programming
                                language: how it works, loops or
                                conditional statements.
                            </p>
                        </TextSection>
                    </StyledOneProject>
                    <Toolkit>
                        <ToolkitLi><h5>Toolkit:</h5></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo gdevelop.png" alt = "GDevelop"/></ToolkitLi>
                        <ToolkitLi><h5>My Technical Responsibilities:</h5></ToolkitLi>
                        <ToolkitLi><p>2D Game Engine</p></ToolkitLi>
                        <ToolkitLi><p>Visual Coding And Scripting</p></ToolkitLi>
                    </Toolkit>
                    <StyledOneProject>
                        <ViewMoreButton target= {true} href="https://gd.games/games/2de620ae-f930-4bf6-87fb-832e2b2ba3c8" text ="Play To My Game"/>
                    </StyledOneProject>
                    <StyledOneProject>
                        <StyledOneProjectImg src = "./ocr.png" alt = "Optical Character Recognition Software Program"/>
                        <TextSection>
                            <h3>OCR</h3>
                            <p>With 2 other students, I created an Optical
                                Charater Recognition software program (OCR). It was fully
                                developed in C and I used the editor Vim.
                            </p>
                        </TextSection>
                    </StyledOneProject>
                    <Toolkit>
                        <ToolkitLi><h5>Toolkit:</h5></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo c.png" alt = "C"/></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo github.png" alt = "GitHub"/></ToolkitLi>
                        <ToolkitLi><ToolkitImg src = "./logo vim.png" alt = "Vim"/></ToolkitLi>
                    </Toolkit>
                    <Toolkit>
                        <ToolkitLi><h5>My Technical Responsibilities:</h5></ToolkitLi>
                        <ToolkitLi><p>GUI</p></ToolkitLi>
                        <ToolkitLi><p>Debug</p></ToolkitLi>
                        <ToolkitLi><p>Image Loading & Splitting</p></ToolkitLi>
                        <ToolkitLi><p>Result Saving & Displaying</p></ToolkitLi>
                    </Toolkit>
                    <StyledOverviewTitle>
                        <h3>Calculator</h3>
                        <hr/>
                    </StyledOverviewTitle>
        </>
    )
}

// @media screen and (max-width: 750px){
//     .one-project{
//         flex-direction: column;
//     }
//     .one-project img{
//         margin: auto;
//     }
    
//     .toolkit{
//         flex-direction: column;
//     }

//     .calc-element{
//         flex-direction: column;
//     }
//     .input{
//         width: 100%;
//     }
// }