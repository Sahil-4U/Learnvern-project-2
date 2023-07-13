import React from 'react';
import './AddSubscriber.css';

function AddSubscriber() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' />
                <label htmlFor='pincode'>Pincode</label>
                <input type='text' id='pincode' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddSubscriber