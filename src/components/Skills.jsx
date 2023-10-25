import React from 'react';
import './css/Skills.css'
import { skills } from '../portfolio'

function Skills() {
    const skillBoxStyle = {
        boxShadow: `0px 0px 30px ${ '#CCCCCC'}`
    }

    return (
        <div className="skills" id='skills'>
            <div className="skillsHeader">
                <h2 >Skills</h2>
            </div>
            <div className="skillsContainer">
                        {skills.map((skill, index) => (
                            <div className="skill--box" key={index} style={skillBoxStyle}>
                                <h3 key={skill.name}>
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default Skills