// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import React from 'react';
import './css/Card.css'
import { projects } from '../portfolio'
export default function Card(props) {
    const CardStyle = {
        boxShadow: `0px 0px 10px ${ '#CCCCCC'}`
    }
    // const [data, setData] = useState([]);
  
    // useEffect(() => {
    //       axios.get('#link')
    //         .then(response => {
    //           setData(response.data);
    //           console.log(response.data.bpi)
    //         })
    //         .catch(error => {
    //           console.error(error);
    //         });
    //     }, []);
      return (
        <div className="card-container" id='projects'>
          {projects.map((card, index) => (
            <div className="card" key={index}style={CardStyle}>
              <h2 className="card-title">{card.name}</h2>
              <p className="card-description">{card.description}</p>
              <div className="card-stack">
                {card.stack.map((tech, techIndex) => (
                  <span type='button' className='tech-btn 'key={techIndex}>
                  {tech}
                </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    