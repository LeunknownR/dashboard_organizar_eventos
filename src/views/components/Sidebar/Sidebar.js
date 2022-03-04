//#region Libraries
import { useEffect, useState } from "react";
import { 
    useLocation 
} from "react-router-dom";
//#endregion
//#region Styles
import {
    Container, 
    ContainerListItems 
} from "./styles";
//#endregion
//#region Components
import ListItem from "./components/ListItem/ListItem"; 
import MenuButton from "./components/MenuButton/MenuButton"; 
//#endregion

const informationLinks = [
    { to: "/home", text: "Home", icon: "carbon:home" },
    { to: "/eventos", text: "Eventos", icon: "ic:round-event-note" },
    { to: "/config", text: "Configuración", icon: "ep:setting" } 
];

const Sidebar = () => {
    const location = useLocation();
    //#region States
    const [activeListItems, setActiveListItems] = useState(Array(3));
    //#endregion
    useEffect(() => {
        const newActive = informationLinks
            .map(info => location.pathname
                .includes(info.to));
        setActiveListItems(newActive);
    }, [location.pathname]);
    return (
        <Container>
            <ul>
                <MenuButton/>
                <ContainerListItems>
                    {informationLinks.map((info, idx) => {
                        return (
                            <ListItem 
                                key={idx}
                                to={info.to} 
                                text={info.text}
                                icon={info.icon}
                                active={activeListItems[idx]}/>
                        );
                    })}
                </ContainerListItems>
            </ul>
        </Container>
    )
}

export default Sidebar;