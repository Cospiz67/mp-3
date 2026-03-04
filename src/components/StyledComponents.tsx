import styled from "styled-components";

export const StyledPres = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2% 0;
    position:relative;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`
export const TextSection = styled.div`
    margin: auto 0;
    width: 30%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px){
        width:70%;
        margin: 0 auto;
    }
`
export const StyledOverview = styled.div`
    display:flex;
    flex-direction: column;
`
export const StyledOverviewTitle = styled.div`
    display: flex;
    margin: 1% 4%;
    justify-content: center;
`
export const StyledH3 = styled.h3`
    width: max-content;
    margin: 0 2%;
`
export const StyledHr = styled.hr`
    width: 60%;
    margin: auto 0;
    color: rgb(55, 97, 189);
    background-color: rgb(55, 97, 189);
    height: 5px;
    border: none;
    border-radius: 5px;
`