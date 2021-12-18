

import express from "express"
const app = express()
import cors from "cors"
import fetch from "node-fetch"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))





app.get("/users",  (req,res) => {
   
    fetch('https://search.torre.co/people/_search', {    method: 'POST',
    headers: { 'Content-Type': 'application/json' }}).then(res => res.json()).then(json => {
    const data = json.results.map(user => {
      return {name: user.name, username: user.username, skills: user.skills, picture: user.picture, headline: user.professionalHeadline}
    })
    
    res.status(200).send({data})
    }).catch(err => console.log(err))  
})

app.get('/user/:username', function (req, res, next) {
    const username = req.params.username;
    
    fetch(`https://torre.bio/api/bios/${username}`).then(res => res.json()).then(data => {
      res.status(200).send({data})
    }).catch(err => {
      console.log(err)
    })
})

/*app.post("/result", (req,res) => {
    
    
})

app.delete("/result/:id", (req, res) => {
  const id = req.params.id;

  Result.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  });
});

*/

app.listen(process.env.PORT || 5000, function(){
    console.log("Server running")
    })