import React from 'react'
import { Link, Container, Frame, Column, Text, Title, Break } from './styles/footer'

const Footer = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>{children}</Container >
    )
}

export default Footer
Footer.Frame = ({ children, ...restProps }) => {
    return (
        <Frame {...restProps}>{children}</Frame >
    )
}
Footer.Column = ({ children, ...restProps }) => {
    return (
        <Column {...restProps}>{children}</Column >
    )
}
Footer.Link = ({ children, ...restProps }) => {
    return (
        <Link {...restProps}>{children}</Link >
    )
}
Footer.Title = ({ children, ...restProps }) => {
    return (
        <Title {...restProps}>{children}</Title >
    )
}
Footer.Text = ({ children, ...restProps }) => {
    return (
        <Text {...restProps}>{children}</Text >
    )
}
Footer.Break = ({ children, ...restProps }) => {
    return (
        <Break {...restProps}>{children}</Break >
    )
}