import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './page/Register'; 
import Login from './page/login'; 
import Quection from './page/Quection';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="" element={<Register />}></Route>
                    <Route  exact path="/login" element={<Login/>}> </Route>
                    <Route exact path="/Quection" element={<Quection/>}></Route>
                </Routes>
            </div>
            </Router>



    );
};

export default App;