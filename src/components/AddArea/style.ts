import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image{
        font-size: 25px;
        margin-left: 5px;
        color: #EEE;
        cursor: pointer;
    }

    input{
        border: none;
        outline: none;
        background-color: transparent;
        color: #EEE;
        flex: 1;
        font-size: 16px;
    }
`