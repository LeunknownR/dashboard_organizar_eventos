//#region Icons
import { Icon } from '@iconify/react';
//#endregion
//#region Styles
import { Container } from "./styles";
//#endregion
//#region Components
import CustomButton from "../../../../../components/CustomButton/CustomButton";
//#endregion

const CreatedEvent = ({
    toHome
}) => {
    return (
        <Container>
            <Icon icon="fa-regular:paper-plane" />
            <h3>Tu evento ha sido creado con éxito</h3>
            <p>
                Lo podrás visualizar en la pantalla principal de "Eventos".
            </p>
            <CustomButton
                text="Ir a listado de eventos"
                onClick={toHome}/>
        </Container>
    );
}

export default CreatedEvent;