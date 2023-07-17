import React, { useRef, useState } from 'react';
import './AddSubscriber.css';
import Container from '../templates/Container';
import Button from '../templates/Button';
import ErrorModals from '../templates/ErrorModals';
import Input from '../templates/Input';

function AddSubscriber(props) {
    // I have implementing useRef() instead of useState() that why i comment useState() element and update function:-->
    const nameInputRef = useRef('');
    // const [nam, setNam] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState(null);
    // const nameHandler = (e) => {
    //     setNam(e.target.value);
    // }
    const pincodeHandler = (e) => {
        setPin(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin.trim().length !== 6 || pin < 0) {
            setError({ title: 'Invalid pin', content: 'You must have enter pin whose length is not greater than 6 and this value must be positive' });
            return
        }
        props.addSubscriptionHandler(nameInputRef.current.value, pin);
        // setNam('');
        nameInputRef.current.value = '';
        setPin('');
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModals
                title={error.title}
                content={error.content}
                onClick={errorHandler}
            />}
            <form onSubmit={handleSubmit}>
                <Container className='input'>
                    <label htmlFor='name'>Name</label>
                    <input ref={nameInputRef} type='text' id='name' placeholder='name' required />
                    {/* <Input ref={nameInputRef} type='text' id='name' label='Name' /> */}
                    <label htmlFor='pincode'>Pincode</label>
                    <input type='number' id='pincode' placeholder='pincode' onChange={pincodeHandler} value={pin} required />
                    <Button type="submit" >Save</Button>
                </Container>
            </form>
        </div>
    )
}

export default AddSubscriber;