import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const cssConstants = {
    primaryColor: "#0C090D",
    secondaryColor: "#E01A4F",
    primaryTextColor: "#F15946",
    hoverContainerColor: "#F9C22E",
    hoverTextColor: "#53B3CB"
};

const upup = keyframes`
  from {
      top: 100vh;
  }

  to {
    top: 0vh;
  }
`;

const downdown = keyframes`
  from {
      top: -100vh;
  }

  to {
    top: 0vh;
  }
`;

export const Box = styled.div`
    background: ${cssConstants.primaryColor};
    color: ${cssConstants.primaryTextColor};
    display: flex;
    flex-direction: column;
    height: 120vh;
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
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    width: 35vw;
    height: 120vh;
    border: ${cssConstants.secondaryColor} 3px solid;
    background: ${cssConstants.hoverContainerColor};
    position: relative;
    animation: ${downdown} 1s linear;
    h1 {
        align-self: center;
    }
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
    position: relative;
    animation: ${upup} 1s linear;
    @media (max-width: 900px) {
        width: 100vw;
        height: auto;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 15px;
    align-self: center;
    button {
        background: ${cssConstants.secondaryColor};
        padding: 20px;
        transition: all ease-in 0.25s;
        &:hover {
            background: ${cssConstants.hoverContainerColor};
            border-color: ${cssConstants.secondaryColor};
        }
    }
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
    width: 100%;
    height: 20%;
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
