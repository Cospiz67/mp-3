import styled from "styled-components";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const StyledMain = styled.main`
    min-height: 100vh;
    width:100%;
`

export default function Main(){
    return(
        <StyledMain>
            <Projects/>
        </StyledMain>
    )
}