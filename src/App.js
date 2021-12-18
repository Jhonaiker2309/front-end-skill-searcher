import Navbar from "./components/Navbar/Navbar.jsx"
import User from "./components/User/User.jsx"
import Home from "./components/Home/Home.jsx"
import Usersbyskill from "./components/Usersbyskill/Usersbyskill.jsx"
import {  BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/user/:username" element={<User />}></Route>
				<Route exact path="skill/:skill" element={<Usersbyskill />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
