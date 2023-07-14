import React from 'react';
import './AddSubscriber.css';
import Container from '../templates/Container';

function AddSubscriber() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Container className='input'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                    <label htmlFor='pincode'>Pincode</label>
                    <input type='text' id='pincode' />
                    <button type='submit'>Submit</button>
                </Container>
            </form>
        </div>
    )
}

export default AddSubscriber