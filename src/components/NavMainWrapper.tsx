import styled from "styled-components";

export const NavMainWrapper= styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`