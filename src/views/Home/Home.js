//#region Libraries
import {
    useNavigate 
} from "react-router";
//#endregion
//#region Components
import CustomButton from "../components/CustomButton/CustomButton";
//#endregion
//#region Images
import imgCreateEvent from "./img/img-create-event.jpg";
//#endregion
//#region Styles
import {
    Container, 
    Content, 
    TextContent
} from "./styles";
//#endregion

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <CustomButton 
                variant="purple"
                text="Crear Evento"
                icon="dashicons:arrow-down-alt2"
                onClick={() => navigate("/eventos")}/>
            <Content>
                <img src={imgCreateEvent} alt="Crear Evento"/>
                <TextContent>
                    <h3>Aún no has creado un evento</h3>
                    <p>Empieza creando tu primer evento dando click en <span>"Crear evento"</span></p>
                </TextContent>
            </Content>
        </Container>
    );
}

export default Home;