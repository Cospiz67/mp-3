import styled from "styled-components";

const StyledGridElement = styled.div`
    text-align: center;
    margin: 2%;
`
const StyledImg = styled.img`
    width: 5vw;
    height: auto;
`

export default function GridElement(props:{src: string, alt:string}){
    return(
        <StyledGridElement> 
            <StyledImg src = {props.src} alt = {props.alt}/>
            <p>{props.alt}</p>
        </StyledGridElement>
    )
}