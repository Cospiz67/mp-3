import styled from "styled-components";
import { Link } from "react-router";

const StyledButton= styled(Link)`
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

export default function ViewMoreButton(props:{to: string, text: string, target?: boolean}){
    return(
        <StyledButton target={props.target === true? "_blank": "_self"} to={props.to}>{props.text}</StyledButton>
    )
}