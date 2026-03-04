import styled from 'styled-components';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Nav from './components/Nav.tsx';
import Main from './components/Main.tsx'; 

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

export default function App() {
  return (
    <>
      
    </>
  )
}
