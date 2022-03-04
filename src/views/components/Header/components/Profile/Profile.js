//#region Styles
import {
    Container, 
    Content 
} from "./styles";
//#endregion
//#region Images
import imgProfile from "./img/img-profile-header.jpg";
//#endregion
//#region Components
import LogoutButton from "./components/LogoutButton/LogoutButton"
import NotificationButton from "./components/NotificationButton/NotificationButton"
//#endregion

const Profile = ({ name, position }) => {
    return (
        <Container>
            <NotificationButton/>
            <Content>
                <div className="text">
                    <h4 className="name">Hola, <span>{name}</span></h4>
                    <h5 className="position">{position}</h5>
                </div>
                <img src={imgProfile} alt={name}/>
                <LogoutButton/>
            </Content>
        </Container>
    );
}

export default Profile;