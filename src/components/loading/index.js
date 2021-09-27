import React from 'react'
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading"
const Loading = ({ src, ...otherProps }) => {
    return (
        <Spinner>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

export default Loading
Loading.RealeaseBody = () => {
    return <ReleaseBody />
}