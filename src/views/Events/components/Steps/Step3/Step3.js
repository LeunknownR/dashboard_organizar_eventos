//#region Styles
import { 
    TitleSection,
    SubtitleSection, 
    ParagraphSection, 
    Row, 
    Column 
} from '../components/styles';
import {
    Container, 
    ContainerEventGraphicResult 
} from "./styles";
//#endregion
//#region Components
import InformationSection from './components/InformationSection/InformationSection';
//#endregion
//#region Utils
import db from "../../../utils/db/database";
import { getDate } from "../../../../components/CustomDateTimeField/utils/date";
//#endregion
//#region Images
import imgEventGraphic1 from "../Step1/img/img-event-graphic-1.png";
import imgEventGraphic2 from "../Step1/img/img-event-graphic-2.png";
import imgEventGraphic3 from "../Step1/img/img-event-graphic-3.png";
import imgEventGraphic4 from "../Step1/img/img-event-graphic-4.png";
import imgEventGraphic5 from "../Step1/img/img-event-graphic-5.png";
//#endregion

const imagesEventGraphic = [
    imgEventGraphic1, 
    imgEventGraphic2, 
    imgEventGraphic3, 
    imgEventGraphic4, 
    imgEventGraphic5
];


const Step3 = ({
    form 
}) => {
    //#region Functions
    const getInformationStep1 = (step) => {
        const { part1, part2 } = step;
        return ([
            {
                description: "Título:",
                value: part1.title
            },
            {
                description: "Descripción:",
                value: part1.description
            },
            {
                description: "¿Es destacado?",
                value: part1.resaltEvent ? "Sí" : "No"
            },
            {
                description: "Tipo de evento:",
                value: findEventTypeById(part2.eventTypeId)
            },
            {
                description: "Subtipo de evento:",
                value: findEventSubtypeById(part2.eventSubtypeId)
            },
            {
                description: "Gráfica", 
                render: getGraphic(part2.graphicId)
            }
        ]);
    }
    const findEventTypeById = (eventTypeId) => {
        const foundRow = db.eventType.find(row => row.id === eventTypeId);
        return foundRow && foundRow.text;
    }
    const findEventSubtypeById = (eventSubtypeId) => {
        const foundRow = db.eventSubtype.find(row => row.id === eventSubtypeId);
        return foundRow && foundRow.text;
    }
    const findOrganizerById = (organizerId) => {
        const foundRow = db.organizers.find(row => row.id === organizerId);
        return foundRow && foundRow.text;
    }
    const findLocationById = (locationId) => {
        const foundRow = db.location.find(row => row.id === locationId);
        return foundRow && foundRow.text;
    }
    const findPublicByCampusByIds = (publicByCampusIds = []) => {
        return publicByCampusIds.map((currentId, idx) => {
            const foundRow = db.publicByCampus.find(
                row => currentId === row.id
            );
            return (
                <li key={idx}>
                    {foundRow.text}
                </li>
            );
        })
    }
    const findGraphicById = () => {
        const { graphicId } = form.step1.part2;
        const foundRow = db.eventGraphic.find(row => row.id === graphicId);
        return foundRow && foundRow.text;
    }
    const getInformationStep2 = (step) => {
        const { part1, part2, part3 } = step;
        return ([
            {
                description: "Organizado por:",
                value: findOrganizerById(part1.organizerId)
            },
            {
                description: "Docente a cargo:",
                value: part1.teacherFullName
            },
            {
                description: "Ubicación:",
                value: findLocationById(part2.locationId)
            },
            {
                description: "Vacantes:",
                value: part3.quantityVacancy
            },
            {
                description: "Público:",
                render: findPublicByCampusByIds(part3.publicByCampusIds)
            }
        ]);
    }
    const getInformation = () => {
        const { step1, step2 } = form;
        return [
            ...getInformationStep1(step1),
            ...getInformationStep2(step2)
        ];
    }
    const getEventDate = () => {
        const { date } = form.step1.part3;
        return {
            description: "Duración:",
            render: (
                <span>Inicia <b>{getDate(date.start, false)}</b> / Finaliza <b>{getDate(date.end, false)}</b></span>
            )
        };
    }
    const getShift = () => {
        const { shifts } = form.step1.part3;
        return (
            <ul>
                {shifts.map((shift, idx) => {
                    return (
                        <li key={idx}>
                            {shift.timeStart} - {shift.timeEnd}
                        </li>
                    );
                })}
            </ul>
        );
    }
    const getDays = () => {
        const { daysIds } = form.step1.part3;
        return (
            <ul>
                {daysIds.map((currentId, idx) => {
                    const foundRow = db.days.find(row => row.id === currentId);
                    return (
                        <li key={idx}>
                            {foundRow.text}
                        </li>
                    )
                })}
            </ul>
        );
    }
    const getGraphic = (graphicId) => {
        return (
            <ContainerEventGraphicResult>
                <img src={imagesEventGraphic[graphicId - 1]} 
                    alt="Gráfica"/>
                <span>{findGraphicById()}</span>
            </ContainerEventGraphicResult>
        );
    }
    //#endregion
    return (
        <Container>
            <TitleSection>Resumen del evento:</TitleSection>
            <Column>
                <SubtitleSection>
                    Título:
                </SubtitleSection>
            </Column>
            <ParagraphSection>
                Selecciona la gráfica que ayudará al estudiante a identificar tu evento
            </ParagraphSection>
            <Row className="center">
                <Column>
                    {getInformation().map((info, idx) => {
                        return (
                            <InformationSection key={idx} {...info}/>
                        );
                    })}
                </Column>
                <Column>
                    <InformationSection {...getEventDate()}/>
                    <Row>
                        <InformationSection 
                            description="Días"
                            vertical={true}
                            render={getDays()}/>
                        <InformationSection 
                            description="Horas"
                            vertical={true}
                            render={getShift()}/>
                    </Row>
                </Column>
            </Row>
        </Container>
    );
}

export default Step3;