import React, { useState } from 'react';
import './AddSubscriber.css';
import Container from '../templates/Container';
import Button from '../templates/Button';

function AddSubscriber() {
    const [nam, setNam] = useState('');
    const [pin, setPin] = useState('');
    const nameHandler = (e) => {
        setNam(e.target.value);
    }
    const pincodeHandler = (e) => {
        setPin(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nam, pin);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Container className='input'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Name' onChange={nameHandler} value={nam} required />
                    <label htmlFor='pincode'>Pincode</label>
                    <input type='text' id='pincode' placeholder='Pincode' minLength={6} maxLength={6} onChange={pincodeHandler} value={pin} required />
                    <Button type="submit" >Save</Button>
                </Container>
            </form>
        </div>
    )
}

export default AddSubscriber;