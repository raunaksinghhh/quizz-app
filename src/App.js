import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './page/Register'; 
import Login from './page/login'; 

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/register" element={<Register />}></Route>
                    <Route  exact path="/login" element={<Login/>}> </Route>
                </Routes>
            </div>
            </Router>



    );
};

export default App;