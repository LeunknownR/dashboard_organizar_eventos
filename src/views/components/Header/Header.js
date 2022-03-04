import Profile from "./components/Profile/Profile";
//#region Styles
import {
    Container
} from "./styles";
//#endregion

const Header = () => {
    return (
        <Container>
            <Profile name="Manuel" position="Desarrollador"/>
        </Container>
    );
}

export default Header;