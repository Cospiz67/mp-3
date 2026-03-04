import {Routes} from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";


export default function Root(){
    return(
        <>
            <Wrapper>
                <Header/>
                <NavMainWrapper>
                    <Nav/>
                    <Routes>

                    </Routes>
                </NavMainWrapper>
                <Footer/>
            </Wrapper>
        </>
    );
}