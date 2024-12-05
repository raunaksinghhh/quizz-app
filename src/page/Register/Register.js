import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

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
            setMessage(response.data.message);
        } catch (err) {
            console.error("error registering", err);
            setError("error registering");
        }
    };

    const signinPressed = async () => {
        try {
            const response = await axios.post(
                "https://dummyapicsi.onrender.com/api/login",
                { username: username, password: password }
            );
            console.log("successful login", response);
            setMessage(response.data.message);
        } catch (err) {
            console.error("error logging in", err);
            setError("error logging in");
        }
    };

    return (
        <div className="register-header">
            <h1>Register</h1>
            <div>
                <label>Username</label>
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
            <button onClick={signinPressed}>Sign In</button>

          
        </div>
    );
};

export default Register;