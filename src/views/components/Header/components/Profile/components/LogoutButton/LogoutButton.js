//#region Icons
import { Icon } from '@iconify/react';
//#endregion
//#region Styles
import {
    Container 
} from "./styles";
//#endregion

const LogoutButton = () => {
    return (
        <Container>
            <Icon className="arrow" icon="dashicons:arrow-down-alt2"/>
        </Container>
    );
}

export default LogoutButton;