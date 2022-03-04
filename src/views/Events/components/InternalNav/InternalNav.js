//#region Styles
import {
    Container  
} from "./styles";
//#endregion
//#region Components
import InternalNavLink from "./InternalNavLink/InternalNavLink";
//#endregion

const InternalNav = () => {
    return (
        <Container>
            <ul>
                <InternalNavLink 
                    to="/eventos"
                    text="Pantalla principal de eventos"/>
                <InternalNavLink 
                    to="/eventos" 
                    text="Creando evento (Carga Manual)"
                    className="active"
                    isLast={true}/>
            </ul>
        </Container>
    );
}

export default InternalNav