import React from 'react'
import "./Home.css"
import image from "./torre.jpg"

export default function Home() {
    return (
			<div className="home">
				<div className="welcome">Welcome to <span className="torre-invitation">Torre!</span></div>
				<div className="indication">Please, write a name on the search bar to get started</div>
                <img src={image} className="image-torre" alt="person"/>
			</div>
		);
}
