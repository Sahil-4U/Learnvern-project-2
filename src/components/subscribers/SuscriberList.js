import React from 'react';
import './SuscriberList.css';
import Container from '../templates/Container'

function SuscriberList(props) {
    return (
        <Container className="subscribers">
            <ul>
                {props.list?.map((iterator) => {
                    return (
                        <li key={iterator.id}>{iterator.name} - {iterator.pincode}</li>
                    )
                })}
            </ul>
        </Container>
    )
}

export default SuscriberList;