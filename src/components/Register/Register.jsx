import React, { useState, useSyncExternalStore } from 'react';

const Register = () => {
    const [email , setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(e.target);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const PasswordPasswordBlur = e => {
        console.log(e.target.value);
    }

    return (
        <div className='my-3'>
            <h2 className='text-center display-5 fw-bold '>Please Register Here</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" className='form-control'
                required /> <br />
                <input onBlur={PasswordPasswordBlur} type="password" name="password" id="password" className='form-control' required />
                <br />
                <button className='btn btn-warning'>Submit</button>
            </form>
        </div>
    );
};

export default Register;