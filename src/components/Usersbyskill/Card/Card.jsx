import React from 'react'
import {Link} from "react-router-dom"
import "./Card.css"

export default function Card({username, name, headline, skills, picture}) {
    return (
			<div className="card">
				<div className="image-and-name">
					<img src={picture} alt="person" className="card-image" />
					<div className="card-text">
						<Link to={`/user/${username}`} className="my-link">
							<span className="card-link">{name}</span>
						</Link>
					</div>
				</div>
				<div className="headline">{headline}</div>
				{skills.splice(0, 5).map((skill) => (
					<button className="skill-button">
						<Link to={`/skill/${skill.name}`}>
							<span className="skill-text">{skill.name}</span>
						</Link>
					</button>
				))}
			</div>
		);
}
