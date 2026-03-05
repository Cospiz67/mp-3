import { useEffect, useState } from "react";
import styled from "styled-components";
import ViewMoreButton from "./ViewMoreButton";
import { StyledH3, StyledHr } from "./StyledComponents";

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

    @media screen and (max-width: 750px){
        flex-direction: column;
    } 
`
const StyledOneProjectImg = styled.img`
    margin: 2%;
    width: 20vw;
    height: auto;
    border-radius: 10px;
    object-fit: contain;

    @media screen and (max-width: 750px){
        margin: auto;
    }
`
const TextSection = styled.div`
    width: 60%;
    text-align: justify;
    padding: 2%;
    margin: auto 0;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px){
        margin: 0 auto;
    }
`
const ImgCapigame = styled.img`
    width:10vw;
    margin: 2%;
    height: auto;
    border-radius: 10px;
    object-fit: contain;

    @media screen and (max-width: 750px) {
        margin: auto;
    }
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

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`
const StyledOverviewTitle = styled.div`
    width:100%;
    display: flex;
    margin: 1% 4%;
    justify-content: center;
`
const StyledCalculator = styled.div`
    background-color: rgb(178,217,234);
    border-radius: 15px;
    margin:3% auto;
    width:50%;
    height:min-content;
    padding:2%;
`
const StyledCalcElement = styled.div`
    margin:5%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }

`
const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 3%;
    width:50%;
    font-size: calc(2px + 1.3vw);

    @media screen and (max-width: 750px){
        width:100%; 
    }
    
    input{
        border-radius: 7px;
        border: none;
        margin: 5% 0;
        background-color:rgb(234,227, 219);
        padding: 3%;
        font-size: calc(2px + 1.3vw);

        &:focus{
        outline: 2px solid rgb(55, 97, 189);
        }
        
        &:hover{
            background-color: rgb(223, 217, 210);
        }
    }
`
const StyledOutput = styled.p`
    margin:auto;
    text-align: center;
    background-color:rgb(234,227, 219);
    border-radius:5px;
    width:50%;

    &.Red{
        color: red;
    }
    
    &.Black{
        color: black;
    }
`
const StyledCalcElementButton = styled.button`
    margin:3%;
    padding: 4%;
    background-color: rgb(234,227, 219);
    border: 2px solid rgb(55, 97, 189) ;
    border-radius:20px;
    font-size: calc(2px + 1.3vw);
    
    &:hover{
        background-color: rgb(223, 217, 210);
`

export default function Projects(){

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState("");
    const [isRed, setColor] = useState(false);

    useEffect(()=>
    {
            if(Number(output) <0)
                setColor(true);
            else
                setColor(false);
    },[output]);

    function clearFunction()
    {
        setInput1("");
        setInput2("");
        setOutput("");
    }

    function addition()
    {
        setOutput(String(Number(input1)+ Number(input2)));
    }

    function substraction()
    {
        setOutput(String(Number(input1)- Number(input2)));
    }

    function multiplication()
    {
        setOutput(String(Number(input1) * Number(input2)));
    }

    function division()
    {
        setOutput(String(Number(input1)/ Number(input2)));
    }

    function power()
    {
        let firstInput = Number(input1);
        let secondInput = Number(input2);
        let negativePower = false;
        if(secondInput<0)
        {
            negativePower= true;
            secondInput *= (-1);
        }

        let ans = 1;
        for(let i=0; i<secondInput; i++)
        {
            ans*=firstInput;
        }
        if(negativePower===true)
            ans = 1/ans;

        setOutput(String(ans));
    }

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
                        <ViewMoreButton target= {true} to="https://www.youtube.com/watch?v=CKALwMykcis" text="Watch The Trailer Here"/>
                        <ViewMoreButton target= {true} to="https://www.instagram.com/head4che.prod.co/" text="Go To Our Instagram Page"/>
                        <ViewMoreButton target= {true} to="https://head4che-prod.github.io/" text="Visit Our Website"/>
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
                        <ViewMoreButton target= {true} to="https://marieblancheiraldi.wordpress.com/" text="Visit The Website"/>
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
                        <ViewMoreButton target= {true} to="https://gd.games/games/2de620ae-f930-4bf6-87fb-832e2b2ba3c8" text ="Play To My Game"/>
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
                        <StyledH3>Calculator</StyledH3>
                        <StyledHr/>
                    </StyledOverviewTitle>
                    <StyledCalculator>
                        <StyledCalcElement>
                            <StyledInput>
                                <label htmlFor= "first-input">Enter first number: </label>
                                <input placeholder ="Enter first number" value={input1} onChange={(e)=>setInput1(e.target.value)}/>
                            </StyledInput>
                            <StyledInput>
                                <label htmlFor= "second-input">Enter second number: </label>
                                <input placeholder ="Enter second number" value ={input2} onChange={(e)=>setInput2(e.target.value)}/>
                            </StyledInput>  
                        </StyledCalcElement>
                        <StyledCalcElement>
                            <p>Result:</p>
                            <StyledOutput className={isRed ? "Red": "Black"}>{output}</StyledOutput>
                        </StyledCalcElement>
                        <StyledCalcElement>
                            <StyledCalcElementButton onClick={addition}> + </StyledCalcElementButton>
                            <StyledCalcElementButton onClick={substraction}> - </StyledCalcElementButton>
                            <StyledCalcElementButton onClick={multiplication}> * </StyledCalcElementButton>
                            <StyledCalcElementButton onClick={division}> / </StyledCalcElementButton>
                            <StyledCalcElementButton onClick={power}> ** </StyledCalcElementButton>
                            <StyledCalcElementButton onClick={clearFunction}> Clear </StyledCalcElementButton>
                        </StyledCalcElement>
                    </StyledCalculator>
        </>
    )
}
