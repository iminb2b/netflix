import React, { useState, useContext, createContext } from 'react'
import reactDom from 'react-dom';
import { Container, Overlay, Inner, Close, Button, Video } from './styles/player'
export const PlayerContext = createContext();
const Player = ({ children, ...otherProps }) => {
    const [showPlayer, setShowPlayer] = useState(false)
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>

            <Container>
                {children}
            </Container>
        </PlayerContext.Provider>
    )
}

export default Player
Player.Button = function PLayerButton({ children, ...otherProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    return <Button {...otherProps} onClick={() => setShowPlayer(!showPlayer)} >Play</Button>
}
Player.Video = function PlayerVideo({ src, ...otherProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    return showPlayer ? reactDom.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    ) : null
}