import React from 'react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




function Quection() {
  
useEffect(() => {
  (async () => {
    try {
      const result = await axios.get(
        "https://dummyapicsi.onrender.com/api/questions"
      );
      console.log(result.data);
    } 
    catch (error) {
      console.error(error);
      }
    }
  )
}


)
  return (
    <div className="quection">
        <h1>quiz-app</h1>
        <h2> quection </h2> 
        <div>
          <label>option 1</label>
          <input type="radio">
          </input>
          <label>option 2</label>
          <input
          type="radio"
          />
          <label>option 3</label>
          <input type="radio"></input>

          <button onClick={NextPressed}>Next</button>
          <button onClick={PreviousPressed}>Previous</button>
        </div>




    </div>
  )
}

export default Quection