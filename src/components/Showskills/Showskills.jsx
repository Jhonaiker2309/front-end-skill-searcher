import React from 'react'
import {Link} from "react-router-dom"
import "./Showskills.css"

export default function Showskills({levelOfSkill, skills}) {
    return (
			<div>
				<h1 className="level">{levelOfSkill}</h1>
				{skills.map((skill) => (
					<Link className="skill-link" to={`/skill/${skill.name}`}><span><button className="skill-button"><span className="skill-text">{skill.name}</span></button> </span></Link>
				))}
			</div>
		);
}
