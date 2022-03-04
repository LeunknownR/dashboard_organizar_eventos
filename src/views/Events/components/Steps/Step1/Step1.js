//#region Styles
import {
    Container 
} from "../components/styles";
//#endregion
//#region Components
import Part1 from "./components/Part1/Part1";
import Part2 from "./components/Part2/Part2";
import Part3 from "./components/Part3/Part3";
//#endregion

const Step1 = ({
    form, 
    handlerForm 
}) => {
    //#region Functions
    const handlerChangeField = (partForm, field, value) => {
        handlerForm("step1", partForm, field, value);
    }
    //#endregion
    return (
        <Container>
            <Part1 
                form={form.part1}
                handlerChangeField={(field, value) => handlerChangeField("part1", field, value)}/>
            <Part2 
                form={form.part2}
                handlerChangeField={(field, value) => handlerChangeField("part2", field, value)}/>
            <Part3 
                form={form.part3}
                handlerChangeField={(field, value) => handlerChangeField("part3", field, value)}/>
        </Container>
    );
}
export default Step1;