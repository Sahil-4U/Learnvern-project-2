import React from 'react';
import './ErrorModals.css';
import Container from './Container';
import ReactDOM from 'react-dom';
import Button from './Button'
const Backdrop = () => {
    return <div className='backdrop'></div>
}
const Overlay = (props) => {
    return (
        <Container className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p className='content'>{props.content}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onClick}>okay</Button>
            </footer>
        </Container>
    )
}
function ErrorModals(props) {
    return (
        // <div className='backdrop'>


        //     <Container className='modal'>
        //         <header className='header'>
        //             <h2>{props.title}</h2>
        //         </header>
        //         <div>
        //             <p className='content'>{props.content}</p>
        //         </div>
        //         <footer className="actions">
        //             <Button onClick={props.onClick}>okay</Button>
        //         </footer>
        //     </Container>
        // </div>
        <>
            {ReactDOM.createPortal(
                <Backdrop />, document.getElementById('backdrop-El')
            )}
            {
                ReactDOM.createPortal(
                    <Overlay title={props.title} content={props.content} onClick={props.onClick} />, document.getElementById('overlay-El')
                )
            }
        </>
    )
}

export default ErrorModals