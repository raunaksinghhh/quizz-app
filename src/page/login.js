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
                "https://dummyapicsi.onrender.com/api/login",
                { username: username, password: password }
            );
            console.log("successful login", response.data.message);
            if(response.data.message==="Login successful"){navigate("/Quection"); }
            
        } catch (err) {
            console.error("error login", err);
        }
    };

    return (
        <div className="register-header">
            <h1>Login</h1>
            <div>
                <label>username</label>
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

            <button onClick={registerPressed}>login</button>
            <Link to="/Quection"></Link>
        </div>
    );
};

export default Register;