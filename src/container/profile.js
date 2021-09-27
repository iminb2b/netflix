import { Header, Profiles } from "../components"
import * as ROUTES from "../constants/routes"
import logo from "../logo.svg"
export const SelectProfileContainer = ({ user, setProfile }) => {
    return (
        <>
            <Header bg={false}>
                <Header.Container>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
                </Header.Container>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {
                        setProfile({ 'displayName': user.displayName, 'photoURL': user.photoURL })
                    }}>
                        <Profiles.Picture src={user.photoURL} alt="photo" />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )

}