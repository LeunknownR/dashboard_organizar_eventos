//#region Icons
import { Icon } from '@iconify/react';
//#endregion
//#region Styles
import {
    Container   
} from "./styles";
//#endregion

const MenuButton = () => {
    return (
        <Container>
            <Icon icon="eva:menu-fill"/>
        </Container>
    );
}

export default MenuButton;