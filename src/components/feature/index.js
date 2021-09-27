import React from 'react'
import { Container, SubTitle, Title } from "./styles/feature"
const Feature = ({ children, ...otherProps }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Feature;
Feature.Title = ({ children, ...otherProps }) => {
    return <Title {...otherProps}>{children}</Title>
}
Feature.SubTitle = ({ children, ...otherProps }) => {
    return <SubTitle {...otherProps}>{children}</SubTitle>
}