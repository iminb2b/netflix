import styled from "styled-components/macro";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;
export const Title = styled.h1`
    font-size: 48px;
    width: 100%;
    color: white;
    text-align: center;
    font-weight: 500;

`;
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`;
export const User = styled.div`
`;
export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    user-select: none;
    border: 3px solid black;
    cursor: pointer;
    transition: ease 0.3s;
`;
export const Name = styled.p`
    color: #808080;
    transition: ease 0.3s;
    text-overflow: ellipsis;
    font-size: 16px;
    cursor: pointer;
    
`;
export const Item = styled.li`
        max-height: 200px;
        max-width: 200px;
        list-style-type: none;
        text-align: center;
        margin-right: 30px;
    
        &:hover{
            ${Picture}{
                border: 3px solid white;
            }
            ${Name}{
                font-weight: bold;
                color: white;
            }
        }  
    `;
