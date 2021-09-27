import React, { useContext, createContext, useState } from 'react'
import { Error2, Container, LinkSmall, TextSmall1, LinkShow, Error, Title, Text, TextSmall, Link, Input, Submit, Base } from './styles/form'

const ShowContext = createContext();

const Form = ({ children, signIn, ...otherProps }) => {
    return (
        <Container signIn={signIn}>
            {children}
        </Container>
    )
}

export default Form

Form.Error = ({ children, ...otherProps }) => {
    return <Error {...otherProps}>{children}</Error>
}
Form.Error2 = ({ children, ...otherProps }) => {
    return <Error2 {...otherProps}>{children}</Error2>
}
Form.Title = ({ children, ...otherProps }) => {
    return <Title {...otherProps}>{children}</Title>
}
Form.Text = ({ children, ...otherProps }) => {
    return <Text {...otherProps}>{children}</Text>
}
Form.TextSmall = ({ children, ...otherProps }) => {
    return <TextSmall {...otherProps}>{children}</TextSmall>
}

Form.Link = ({ children, ...otherProps }) => {
    return <Link {...otherProps}>{children}</Link>
}
Form.LinkSmall = ({ children, ...otherProps }) => {
    return <LinkSmall {...otherProps}>{children}</LinkSmall>
}
Form.LinkShow = function LinkShowFn({ children, ...otherProps }) {
    const { show, setShow } = useContext(ShowContext);
    return <LinkShow {...otherProps}
        onClick={() => setShow(true)}
        show={show}
    >{children}</LinkShow>
}
Form.TextSmall1 = function TextSmallfn({ children, ...otherProps }) {
    const { show } = useContext(ShowContext);
    return <TextSmall1 {...otherProps} show={show}>{children}</TextSmall1>
}
Form.Input = ({ children, ...otherProps }) => {
    return <Input {...otherProps}>{children}</Input>
}
Form.Submit = ({ children, ...otherProps }) => {
    return <Submit {...otherProps}>{children}</Submit>
}
Form.Base = function LinkShowFn({ children, ...otherProps }) {
    const [show, setShow] = useState(false);

    return <ShowContext.Provider value={{ show, setShow }}>
        <Base {...otherProps}>{children}</Base>
    </ShowContext.Provider>

}
