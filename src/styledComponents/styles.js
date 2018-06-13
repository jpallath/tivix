import styled from "styled-components";
import { Link } from "react-router-dom";

const cssConstants = {
    primaryColor: "#0C090D",
    secondaryColor: "#E01A4F",
    primaryTextColor: "#F15946",
    hoverContainerColor: "#F9C22E",
    hoverTextColor: "#53B3CB"
};

export const Box = styled.div`
    background: ${cssConstants.primaryColor};
    color: ${cssConstants.primaryTextColor};
    display: flex;
    flex-direction: column;
    height: 100vh;
    h1 {
        text-align: center;
        font-size: 20px;
    }
`;

export const BoxItem = styled.li`
    transition: all ease-in 0.5s;
    :hover {
        color: ${cssConstants.hoverTextColor};
        cursor: pointer;
    }
`;

export const ProfileBox = styled.div`
    display: flex;
    @media (max-width: 900px) {
        display: block;
    }
`;

export const TodoListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 35vw;
    height: 100vh;
    border: ${cssConstants.secondaryColor} 3px solid;
    background: ${cssConstants.hoverContainerColor};
    @media (max-width: 900px) {
        width: 100vw;
        height: auto;
    }
`;

export const TodoItem = styled.li`
    color: ${props =>
        props.iscompleted
            ? cssConstants.hoverTextColor
            : cssConstants.secondaryColor};
    transition: all ease-in 0.25s;
    text-decoration: ${props => (props.iscompleted ? "line-through" : "none")}
    &:hover {
        color: ${cssConstants.primaryTextColor};
        cursor: pointer;
    }
`;

export const PostsListBox = TodoListBox.extend`
    width: 65vw;
    padding: 10px;
    background: ${cssConstants.hoverTextColor};
    @media (max-width: 900px) {
        width: 100vw;
        height: auto;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    button {
        background: ${cssConstants.secondaryColor};
        padding: 20px;
    }
`;

const Post = styled.li`
    background: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

export const PostItem = styled.li`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    h2 {
        align-self: center;
        border-bottom: ${cssConstants.secondaryColor} 2px solid;
    }
    p {
        font-style: italic;
        width: 85%;
        align-self: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        margin: 1% 0;
    }
`;

export const StyledLink = styled(Link)`
    position: fixed;
    bottom: 2%;
    left: 2%;
    padding: 1%;
    background: ${cssConstants.secondaryColor};
    color: ${cssConstants.hoverContainerColor};
`;
