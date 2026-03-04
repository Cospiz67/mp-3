import {createBrowserRouter, Routes} from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: #3759a1be;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: calc(2px + 1.3vw);
  cursor: default;
`

const NavMainWrapper= styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`

function Root(){
    return(
        <>
            <Wrapper>
                <Header/>
                <NavMainWrapper>
                    <Nav/>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                    </Routes>
                </NavMainWrapper>
                <Footer/>
            </Wrapper>
        </>
    );
}

export const router = createBrowserRouter(
    [{path:"*", Component: Root}]
);