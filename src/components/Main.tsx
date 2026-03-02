import styled from "styled-components";
import Home from "./Home";

const StyledMain = styled.main`
    min-height: 100vh;
    width:100%;
`

export default function Main(){
    return(
        <StyledMain>
            <Home/>
        </StyledMain>
    )
}