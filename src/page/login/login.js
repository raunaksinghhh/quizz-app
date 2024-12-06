import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const loginPressed = async () => {
        try {
            const response = await axios.post(
                "https://dummyapicsi.onrender.com/api/login",
                { email: email, password: password }
            );
            console.log("successful login", response);
            setMessage(response.data.message);
        } catch (err) {
            console.error("error logging in", err);
            setError("error logging in");
        }
    };

    return (
        <div className="login-header">
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={handleEmailChange} 
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

            <button onClick={loginPressed}>Login</button>

          
        </div>
    );
};

export default Login;