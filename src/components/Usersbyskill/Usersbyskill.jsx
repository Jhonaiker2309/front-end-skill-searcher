import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Card from "./Card/Card.jsx"
import "./Usersbyskill.css"


export default function Usersbyskill() {
    const [users, setUsers] = useState([])
    const {skill} = useParams()

    useEffect(()=> {
      fetch(`${process.env.REACT_APP_BACK_END}/users`).then(res => res.json()).then(data => {
      let myList = []

      data.data.forEach(user => {
        let existingSkill = false 
        user.skills.forEach(currentSkill => {
          if(currentSkill.name.toLowerCase() === skill.toLowerCase()){
            existingSkill = true
          }
        })
      if(existingSkill){
        myList.push({name: user.name, skills: user.skills, headline: user.headline, username: user.username, picture: user.picture})
      }        
      })
        setUsers(myList)
      })
      
    }, [])

        useEffect(() => {
					fetch(`${process.env.REACT_APP_BACK_END}/users`)
						.then((res) => res.json())
						.then((data) => {
							let myList = [];

							data.data.forEach((user) => {
								let existingSkill = false;
								user.skills.forEach((currentSkill) => {
									if (currentSkill.name.toLowerCase() === skill.toLowerCase()) {
										existingSkill = true;
									}
								});
								if (existingSkill) {
									myList.push({
										name: user.name,
										skills: user.skills,
										headline: user.headline,
										username: user.username,
										picture: user.picture,
									});
								}
							});
							setUsers(myList);
						});
				}, [skill]);

    return (
			<div className="users-by-skill">
				{users.map((user,i ) => {
                  const {name, username, headline, picture, skills} = user
                  return (
										<div key={i}>
											<Card
												name={name}
												username={username}
												headline={headline}
												picture={picture}
												skills={skills}
											/>
										</div>
									);
                })}
			</div>
		);
}
