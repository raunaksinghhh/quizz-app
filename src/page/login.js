import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const registerPressed = async () => {
        try {
            const response = await axios.post(
                "https://dummyapicsi.onrender.com/api/register",
                { username: username, password: password }
            );
            console.log("successful registration", response);
            
        } catch (err) {
            console.error("error registering", err);
            
        }
    };

    return (
        <div className="register-header">
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleUsernameChange} 
                />
            </div>

            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                />
            </div>

            <button onClick={registerPressed}>Register</button>
        </div>
    );
};

export default Register;