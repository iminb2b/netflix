import React from 'react'
import { Container, Input, Button, Text, Break } from './styles/opt-form'

const OptForm = ({ children, ...othersProps }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default OptForm

OptForm.Input = ({ ...othersProps }) => {
    return <Input{...othersProps}></Input>
}
OptForm.Button = ({ children, ...othersProps }) => {
    return <Button{...othersProps}>{children}
        <img src="/images/icons/chevron-right.png" alt="Try Now" /></Button>
}
OptForm.Text = ({ children, ...othersProps }) => {
    return <Text{...othersProps}>{children}</Text>
}
OptForm.Break = ({ ...othersProps }) => {
    return <Break {...othersProps}></Break>
}