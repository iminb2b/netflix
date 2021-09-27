import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Field } from "formik"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    max-height: ${({ signIn }) => signIn ? '660px' : '750px'};
    background: rgba(0,0,0,0.75);
    border-radius: 5px;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 50px 68px 40px;
    margin-bottom: 100px;
    box-sizing: border-box;
`;
export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;
export const Error2 = styled.div`
    color: #e87c03;
    font-size: 14px;
    padding: 10px 20px;
`;
export const Base = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    
`;
export const Title = styled.h1`
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;
export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;
export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
`;
export const Submit = styled.button`
    border-radius: 4px;
    font-size: 16px;
    background-color:#e50914;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    text-align: center;
    transition: all ease 0.3s;
    &:disabled{
        opacity: 0.5;
    }
`;
export const Input = styled(Field)`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: white;
    height: 50px;
    padding: 5px 20px;

    &:last-of-type{
        margin-bottom: 5px;
    }
`;
export const Link = styled(LinkR)`
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;
export const LinkSmall = styled.a`
    color: #0080ff;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;
export const LinkShow = styled.span`
    color: #0080ff;
    cursor: pointer;
    display: ${({ show }) => show ? 'none' : 'inline-block'};
`;
export const TextSmall1 = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
    transition: ease 0.3s;
    opacity: ${({ show }) => show ? '1' : '0'};

`;