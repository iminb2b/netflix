import React, { createContext, useState, useContext } from 'react'
import { Container, Inner, Title, Header, Item, Body, Text } from './styles/accordion';
import add from "../../images/icons/add.png"
import close from "../../images/icons/close-slim.png"
const ToggleContext = createContext();
const Accordion = ({ children, ...othersProps }) => {
    return (
        <Container {...othersProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

export default Accordion;
Accordion.Title = ({ children, ...othersProps }) => {
    return <Title {...othersProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({ children, ...othersProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
        <Item {...othersProps}>{children}</Item>
    </ToggleContext.Provider>
}
Accordion.Header = function AccordionHeader({ children, ...othersProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return <Header onClick={() => setToggleShow(!toggleShow)} {...othersProps}>
        {children}
        {toggleShow ? <img src={close} alt="close" /> : <img src={add} alt="add" />}
    </Header>
}
Accordion.Body = function AccordionBody({ children, ...othersProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return <Body {...othersProps} show={toggleShow}>{children}</Body>;
}
Accordion.Text = function AccordionText({ children, ...othersProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return <Text {...othersProps} show={toggleShow}>{children}</Text>;
}