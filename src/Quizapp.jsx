import React, { useState } from "react";
import { data } from "./Data";
import './quizstyle.css';

export default function Quizapp() {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState('');
  const handleNext = ()=>{
    setIndex(index+1);
  }
  const handliSelect = (optn)=>{
    setOption(optn);
  }

    return (
        <div className='quiz'>
            <h1>{data[index].Question}</h1>
            <ul>
                <li className="selected"
                    onClick={()=>{handliSelect('Option1')}}>{data[index].Option1}</li>

                <li
                 onClick={()=>{handliSelect('Option2')}}>{data[index].Option2}</li>
                
                <li
                onClick={()=>{handliSelect('Option3')}}>{data[index].Option3}</li>
                
                <li
                onClick={()=>{handliSelect('Option4')}}>{data[index].Option4}</li>
            </ul>
            <button onClick={handleNext}>Next</button>
            <h5>Question {index+1} of {data.length}</h5>
        </div>
    )
}