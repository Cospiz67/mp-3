import {createBrowserRouter, Routes, Route} from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Contact from "./Contact";

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: #3759a1be;
  font-family:'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
const StyledMain = styled.main`
    min-height: 100vh;
    width:100%;
`

function Root(){
    return(
        <>
            <Wrapper>
                <Header/>
                <NavMainWrapper>
                    <Nav/>
                    <StyledMain>
                        <Routes>
                            <Route path={`/`} element={<Home/>}/>
                            <Route path={`/about-me`} element={<AboutMe/>}/>
                            <Route path={`/projects`} element={<Projects/>}/>
                            <Route path={`/experiences`} element={<Experience/>}/>
                            <Route path={`/certifications`} element={<Certifications/>}/>
                            <Route path={`/contact`} element={<Contact/>}/>
                        </Routes>
                    </StyledMain>
                </NavMainWrapper>
                <Footer/>
            </Wrapper>
        </>
    );
}

export const router = createBrowserRouter(
    [{path:"*", Component: Root}]
);