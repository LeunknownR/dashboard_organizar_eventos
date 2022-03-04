//#region Libraries
import { forwardRef } from 'react';
import {
    Slide 
} from '@mui/material';
//#endregion
//#region Styles
import { 
    Container, 
    Header,
    Footer
} from './styles';
//#endregion
//#region Icons
import { Icon } from '@iconify/react';
//#endregion

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogAlert = ({
        open, 
        handleOpen,
        handleClose, 
        title, 
        description,
        buttons,
        titleIcon
    }) => {
    return (
        <Container 
            open={open}
            TransitionComponent={Transition}
            onClose={
                handleClose 
                ? handleClose : () => handleOpen(false)}>
            {title && 
                <Header>
                    {titleIcon && <Icon icon={titleIcon}/>}
                    <h3 className="custom-title-2">{title}</h3>
                </Header>
            }
            <article className="content-dialog">
                {description || <p>Descripción</p>}
            </article>
            <Footer>
                {Array.isArray(buttons) && 
                    buttons.map(
                        (ButtonMapping, idx) => <ButtonMapping key={idx}/>)}
            </Footer>
        </Container>
    );
}


export default DialogAlert;