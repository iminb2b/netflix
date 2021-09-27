import React from 'react'
import { Container, List, Name, Picture, Title, Item } from './styles/profiles'
const Profiles = ({ children, ...otherProps }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Profiles
Profiles.Title = ({ children, ...otherProps }) => {
    return <Title {...otherProps}>{children}</Title>
}
Profiles.Name = ({ children, ...otherProps }) => {
    return <Name {...otherProps}>{children}</Name>
}
Profiles.List = ({ children, ...otherProps }) => {
    return <List {...otherProps}>{children}</List>
}
Profiles.Item = ({ children, ...otherProps }) => {
    return <Item {...otherProps}>{children}</Item>
}
Profiles.User = ({ children, ...otherProps }) => {
    return <Item {...otherProps}>{children}</Item>
}
Profiles.Picture = ({ src, ...otherProps }) => {
    return <Picture {...otherProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}></Picture>

}