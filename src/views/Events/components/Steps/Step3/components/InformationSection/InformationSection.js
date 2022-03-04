//#region Styles
import { 
    SubtitleSection, 
} from '../../../components/styles';
import { 
    Container
} from './styles';
//#endregion

const InformationSection = ({
    description, 
    value,
    render, 
    src,
    vertical
}) => {
    return (
        <Container className={vertical && "vertical"}>
            <SubtitleSection>{description}</SubtitleSection>
            {src && <img src={src} alt="Imagen de evento Universidad"/>}
            {render 
                ? render
                : <span>{value}</span>}
        </Container>
    );
}

export default InformationSection;