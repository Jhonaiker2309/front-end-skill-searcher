import React, {useState, useEffect} from 'react'
import Searchbar from "./Searchbar/Searchbar.jsx"
import "./Navbar.css"
import {Link} from "react-router-dom"


export default function Navbar() {
    const [allUsernames, setAllUsernames] = useState([])
  const [usernames, setUsernames] = useState([])

      useEffect(()=> {
    fetch("http://localhost:5000/users").then(res => res.json()).then(data => {
      
      const names = []
      data.data.forEach(datum => names.push({name: datum.name, username: datum.username}))
      setAllUsernames(names)
      setUsernames(names)
    })
  }, [])

    return (
        <div className="navbar">
            <h2 className="left-side"><Link to="/" className="link"><span><span className="torre">torre</span><span className="co">.co</span></span></Link></h2>
            <div className="right-side"><Searchbar placeholder="Search an user" data={allUsernames} /></div>
        </div>
    )
}
