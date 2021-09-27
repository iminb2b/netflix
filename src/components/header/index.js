import React, { useState } from 'react'
import { Background, Group, TextLink, PlayButton, Profile, Search, SearchIcon, SearchInput, Picture, Dropdown, Feature, FeatureCallOut, Text, Frame, Container, Logo, ReactRouterLink, ButtonLink } from './styles/header'

const Header = ({ bg = true, children, ...otherProps }) => {
    return bg ? <Background {...otherProps}>{children}</Background> : children;
}

export default Header
Header.Container = ({ children, ...otherProps }) => {
    return <Container {...otherProps}>{children}</Container>;
};
Header.Frame = ({ children, ...otherProps }) => {
    return <Frame {...otherProps}>{children}</Frame>;
};
Header.Group = ({ children, ...otherProps }) => {
    return <Group {...otherProps}>{children}</Group>;
};
Header.Profile = ({ children, ...otherProps }) => {
    return <Profile {...otherProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...otherProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return <Search {...otherProps} >
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
            <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Films and Series"
            active={searchActive}
        />
    </Search>;
};
Header.Picture = ({ src, ...otherProps }) => {
    return <Picture {...otherProps} src={src ? `/images/users/${src}.png` : ''}></Picture>;
};
Header.Dropdown = ({ children, ...otherProps }) => {
    return <Dropdown {...otherProps}>{children}</Dropdown>;
};
Header.Feature = ({ children, ...otherProps }) => {
    return <Feature {...otherProps}>{children}</Feature>;
};
Header.FeatureCallOut = ({ children, ...otherProps }) => {
    return <FeatureCallOut {...otherProps}>{children}</FeatureCallOut>;
};
Header.Text = ({ children, ...otherProps }) => {
    return <Text {...otherProps}>{children}</Text>;
};
Header.PlayButton = ({ children, ...otherProps }) => {
    return <PlayButton {...otherProps}>{children}</PlayButton>;
};
Header.TextLink = ({ children, ...otherProps }) => {
    return <TextLink {...otherProps}>{children}</TextLink>;
};
Header.Logo = ({ to, ...otherProps }) => {
    return <ReactRouterLink to={to}>
        <Logo {...otherProps} />
    </ReactRouterLink>;
};
Header.ButtonLink = ({ to, children, ...otherProps }) => {
    return <ButtonLink to={to}>
        {children}
    </ButtonLink>;
};