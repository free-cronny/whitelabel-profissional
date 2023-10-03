import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #181616;
    color: #fff;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    flex-direction: column;

    h1 {
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h3 {
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`

export const InputAndButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;

    input {
        border-radius: 0.9375rem;
        background: #D9D9D9;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 60%;
        height: 2.32963rem;
        

        &::placeholder {
            
            color: rgba(0, 0, 0, 0.40);
            text-align: center;
            font-family: Roboto;
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-top: 35px;
        }
    }

    button {
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        margin-top: 10px;
        color: #000;
        text-align: center;
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        border-radius: 0.9375rem;
        background: #D9D9D9;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 12.1875rem;
    }

    button > img{
        width: 30px;
        height: 30px;
        border-radius: 100%;
    }

    
`

export const Cards = styled.div`
    display: flex;
    width: 100%;

    margin-top: 3%;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #fff;
    color: #000;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    p {
        text-align: center;
        font-family: Roboto;
        font-size: 1rem;
        border-bottom: solid 1px #000;
        padding-bottom: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    img {
        margin-top: 15px;
    }

    a {
        margin-top: 15px;
        color: #fff;
        background: #000;
        text-decoration: none;
        font-family: Roboto;
        font-weight: 700;
        border-radius: 5px;
    }
`