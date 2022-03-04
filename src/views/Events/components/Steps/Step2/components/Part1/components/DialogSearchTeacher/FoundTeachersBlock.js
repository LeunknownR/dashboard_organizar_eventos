//#region Styles
import {
    ContainerFoundTeachersBlock
} from "./styles";
//#endregion

const FoundTeachersBlock = ({
    teachersFound, 
    onClick 
}) => {
    return (
        <ContainerFoundTeachersBlock>
            {teachersFound.map((teacher, idx) => {
                return (
                    <li 
                        key={idx}
                        onClick={() => onClick(teacher)}>
                        {teacher}
                    </li>
                );
            })}
        </ContainerFoundTeachersBlock>
    );
}

export default FoundTeachersBlock;