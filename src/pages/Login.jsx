import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/buttons/button';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleNextClick = () => {
        const userInfo = { name };
        localStorage.setItem('v1:userInfo', JSON.stringify(userInfo));
        navigate('/');
    };

    return (
        <div className='d-flex flex-column gap-4 w-100 h-100  align-items-center justify-content-center fs-1'>
            <div className="text-white">YOUR NAME</div>
            <input
                type="text"
                className='card h-10 input-code-login'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button text={'NEXT'} action={handleNextClick} />
        </div>
    );
};

export default Login;
