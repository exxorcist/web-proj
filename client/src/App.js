
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import Register from "./pages/Register";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

function App() {

    return (
        <Router>
            <Routes>
             <Route path="/" element={<Home />} /> 
             <Route path="/login" element={<Login />} /> 
             <Route path="/register" element={<Register />} /> 
             <Route path="/profile/:username" element={<Profile />} /> 
            </Routes>
        </Router>
    );
    // return <Profile/>
}

export default App;
