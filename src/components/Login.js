import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/User/validate', { username, password });
            if (response.data.validated) {
                onLogin(true); // Notify parent of successful login
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <InputText value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <InputText value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <Button label="Login" onClick={handleLogin} />
        </div>
    );
};

export default Login;