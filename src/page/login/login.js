import { useState } from 'react';
import axios from 'axios';

const Login = () => {
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

    const loginPressed = async () => {
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
        <div className="login-header">
            <h1>Login</h1>
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

            <button onClick={loginPressed}>Login</button>

            {error && <div className="error">{error}</div>}
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Login;