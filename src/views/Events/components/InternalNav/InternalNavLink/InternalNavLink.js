//#region Styles
import {
    ContainerLink  
} from "./styles";
//#endregion

const InternalNavLink = ({
    to, text, 
    className,
    isLast = false 
}) => {
    return (
        <>
            <li>
                <ContainerLink
                    className={className}
                    to={to}>{text}</ContainerLink>
            </li>
            {!isLast && ">"}
        </>
    );
}

export default InternalNavLink;