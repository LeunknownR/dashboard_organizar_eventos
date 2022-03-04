//#region Styles
import {
    Container, 
    StepNumber, 
    Description, 
    Line 
} from "./styles";
//#endregion
//#region Icons
import { Icon } from '@iconify/react';
//#endregion

const StepIndex = ({
    children, 
    step, 
    filling = false, 
    passed = false, 
    isLast = false
}) => {
    return (
        <Container>
            {passed 
                ? <Icon icon="akar-icons:circle-check-fill"/>
                : (
                    <StepNumber className={filling && "filling"}>
                        <span>{step}</span>
                    </StepNumber>
                )
            }
            <Description className={(filling || passed) && "filling"}>{children}</Description>
            {!isLast && <Line className={passed && "filling"}/>}
        </Container>
    );
}

export default StepIndex;