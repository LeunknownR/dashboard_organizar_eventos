//#region Icons
import { Icon } from '@iconify/react';
//#endregion
//#region Styles
import {
    Container 
} from "./styles";
//#endregion

const NotificationButton = () => {
    return (
        <Container>
            <Icon icon="carbon:notification"/>
        </Container>
    );
}

export default NotificationButton;