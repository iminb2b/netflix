import styled from "styled-components/macro";


export const Container = styled.div`
    display: flex;
    margin:auto;
    justify-content: center;
    width: 100%;
    background: rgba(0,0,0,0.75);
    
    `;
export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 56px;
    width: 100%;
    max-width: 1000px;
    @media screen and (max-width:1000px){
        padding: 70px 30px;
    }
`;
export const Column = styled.div`
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 1000px;
    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width:600px){
        grid-template-columns: 1fr 1fr;

    }
`;
export const Link = styled.a`
    font-size: 14px;
    color: #757575;
    margin-bottom: 20px;
    font-size:13px;
    text-decoration: none;
`;
export const Title = styled.div`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;
export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;
export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;
