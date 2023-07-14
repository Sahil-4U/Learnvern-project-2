import React from 'react';
import './ErrorModals.css';
import Container from './Container'
import Button from './Button'

function ErrorModals(props) {
    return (
        <div className='backdrop'>


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
        </div>
    )
}

export default ErrorModals