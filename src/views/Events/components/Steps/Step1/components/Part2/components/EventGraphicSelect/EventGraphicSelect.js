//#region Styles
import {
    Container  
} from "./styles";
//#endregion

const EventGraphicSelect = ({
    propsOptions, 
    value, onClick 
}) => {
    return (
        <>
            {propsOptions.map(({ 
                    src, 
                    title, 
                    currentValue 
                }, idx) => {
                return (
                    <EventGraphicOption 
                        key={idx}
                        src={src} 
                        title={title}
                        onClick={() => onClick(currentValue)}
                        selected={currentValue === value}/>
                );
            })}
        </>
    );
};
const EventGraphicOption = ({
    src, 
    title,
    selected = false, 
    onClick 
}) => {
    return (
        <Container 
            onClick={onClick} 
            className={selected && "selected"}>
            <img 
                src={src} 
                alt={title}/>
            <h6>{title}</h6>
        </Container>
    );
}

export default EventGraphicSelect;