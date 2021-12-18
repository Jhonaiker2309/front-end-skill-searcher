import React, {useEffect, useState} from 'react'
import Showskills from "../Showskills/Showskills.jsx"
import {useParams} from "react-router-dom"
import "./User.css"

export default function User() {
    const [user, setUser] = useState({})
    const [master, setMaster] = useState([])
    const [expert, setExpert] = useState([])
    const [proficient, setProficient] = useState([])
    const [novice, setNovice] = useState([])
    const [interested, setInterested] = useState([])
    const {username} = useParams()

     useEffect( () => {
    
      fetch(`http://localhost:5000/user/${username}`).then(res => res.json()).then(data => {
      setUser(data.data)
      
      let masterArray = []
      let expertArray = []
      let proficientArray = []
      let noviceArray = []
      let interestedArray = []

      data.data.strengths.forEach(skill => {
        if(skill.proficiency === "master") masterArray.push(skill)
        if(skill.proficiency === "expert") expertArray.push(skill)
        if(skill.proficiency === "proficient") proficientArray.push(skill)
        if(skill.proficiency === "novice") noviceArray.push(skill)
        if(skill.proficiency === "no-experience-interested") interestedArray.push(skill)
      })

      setMaster(masterArray)
      setExpert(expertArray)
      setProficient(proficientArray)
      setNovice(noviceArray)
      setInterested(interestedArray)
      })
  }, []);

          useEffect( () => {
    
      fetch(`http://localhost:5000/user/${username}`).then(res => res.json()).then(data => {
      setUser(data.data)
      
      let masterArray = []
      let expertArray = []
      let proficientArray = []
      let noviceArray = []
      let interestedArray = []

      data.data.strengths.forEach(skill => {
        if(skill.proficiency === "master") masterArray.push(skill)
        if(skill.proficiency === "expert") expertArray.push(skill)
        if(skill.proficiency === "proficient") proficientArray.push(skill)
        if(skill.proficiency === "novice") noviceArray.push(skill)
        if(skill.proficiency === "no-experience-interested") interestedArray.push(skill)
      })

      setMaster(masterArray)
      setExpert(expertArray)
      setProficient(proficientArray)
      setNovice(noviceArray)
      setInterested(interestedArray)
      })
  }, [username]);

    if(!user.person) { return null }

    return (
			<div className="user">
				<div className="user-left">
					<img src={user.person.picture} alt="person" className="image" />
					<div className="name">{user.person.name}</div>
				</div>
				<div className="user-right">
					<h1 className="skills">Skills</h1>

					{master.length > 0 && (
						<div className="list-of-skills">
							<Showskills levelOfSkill="Master/Influencer" skills={master} />
						</div>
					)}

					{expert.length > 0 && (
						<div className="list-of-skills">
							<Showskills levelOfSkill="Expert" skills={expert} />
						</div>
					)}

					{proficient.length > 0 && (
						<div className="list-of-skills">
							<Showskills levelOfSkill="Proficient" skills={proficient} />
						</div>
					)}

					{novice.length > 0 && (
						<div className="list-of-skills">
							<Showskills levelOfSkill="Novice" skills={novice} />
						</div>
					)}

					{interested.length > 0 && (
						<div className="list-of-skills">
							<Showskills
								levelOfSkill="No experience/Interesed"
								skills={interested}
							/>
						</div>
					)}
				</div>
			</div>
		);
}
