//#region Styles
import {
    ContainerLink  
} from "./styles";
//#endregion
//#region Icons
import { Icon } from '@iconify/react';
//#endregion

const ListItem = ({ 
    to, text, 
    icon, active 
}) => {
    return (
        <li>
            <ContainerLink 
                className={active && "active"}
                to={to} 
                replace={true}>
                <Icon icon={icon}/>
                <span className="description">{text}</span>
            </ContainerLink>
        </li>
    );
}

export default ListItem;