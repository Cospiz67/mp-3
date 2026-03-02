import styled from "styled-components";

const StyledButton= styled.a`
    margin: auto;
    border-radius: 25px;
    border: 2px solid rgb(55, 97, 189);
    padding: 0.5% 5%;
    text-align: center;

    &:hover{
        background-color: rgb(55, 97, 189);
        color: rgb(206, 214, 233);
        cursor: pointer
    }
`

export default function ViewMoreButton(props:{href: string, text: string}){
    return(
        <StyledButton href = {props.href}>{props.text}</StyledButton>
    )
}