import styled from "styled-components/macro";
import { FaBeer } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

    > ${Title}{
        @media screen and (max-width: 1000px){
            margin-left: 30px;

        }
    }
    &:last-of-type{
        margin-bottom: 0;
    }
`;
export const Group = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `alignItems: ${alignItems};`}
    ${({ margin }) => margin && `margin: ${margin};`}

    > ${Container}:first-of-type {
        @media screen and (min-width: 1100px){
            margin-top: -150px;
        }
    }

`;

export const SubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;
export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;
export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background-color: #0000008f;
`;
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
    position: absolute;
    left: 0;
    height: 100%;
    width: 50px;
    color: white;
    background-color: #0000008f;
    z-index: 1000000;
    cursor: pointer;
    &:hover{
        color: #111;
    }
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    color: white;
    background-color: #0000008f;
    z-index: 1000000;
    &:hover{
        color: #111;
    }
`;
export const Item = styled.div`
    display: flex;

    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover{
        transform: scale(1.1);
        z-index: 999;
        ${Meta},${Text}, ${SubTitle}{
                display: block;
                z-index: 100;
            }
    }
    @media screen and (max-width: 1024px){
        &:hover{
            transform: scale(1);
            
        }

        
    }
`;
export const Image = styled.img`
   height: auto;
   width: 100%;
`;
export const Entities = styled.div`
    overflow: visible;
    
`;
export const FeatureText = styled.div`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'};
    margin : 0;

    @media screen and (max-width: 600px) {
        line-height: 22px;
    }
`;
export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right ;
    background-repeat: no-repeat;
    background-color: black;

    @media screen and ( max-width: 1000px){
        height: auto;
        background-size: auto;

        ${Title}{
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText}{
            font-size: 14px
        }
    }

`;
export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureClose = styled.button`
    border: 0;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;

    img{
        filter: brightness(0) invert(1);
        width: 24px;
    }


`;
export const Maturity = styled.div`
    background-color: ${({ rating }) => rating >= 15 ? 'red' : 'green'};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin-right: 10px;
    font-size: 12px;
`;
export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media screen and (max-width: 1000px){
        margin: 30px;
        max-width: none;
    }
`;


