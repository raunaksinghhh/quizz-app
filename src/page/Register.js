import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

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
            if(response.data.message==="successful registration")
            navigate('/Quection'); 
        } catch (err) {
            console.error("error registering", err);
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
                    placeholder="username"
                    onChange={handleUsernameChange} 
                />
            </div>

            <div className="password">
                <label>Password</label>
                <input
                    type="password" 
                    value={password} 
                    placeholder="password"
                    onChange={handlePasswordChange} 
                />
            </div>
            <div>
                <button onClick={registerPressed}>Register</button>
                <Link to="/Quection"></Link>
            </div>
            <div>
                <Link to="/login">Don't have an account? </Link>
            </div>
        </div>
    );
};

export default Register;