import './App.css'
import {Wrapper} from "./components/Wrapper.tsx";
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import {NavMainWrapper} from './components/NavMainWrapper.tsx';
import Nav from './components/Nav.tsx';
import Main from './components/Main.tsx'; 

function App() {
  return (
    <>
      <Wrapper>
        <Header/>
        <NavMainWrapper>
          <Nav/>
          <Main/>
        </NavMainWrapper>
        <Footer/>
      </Wrapper>
      
    </>
  )
}

export default App
