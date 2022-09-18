import logo from './logo.svg';
import './App.css';
import Home from "./component/Home";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Welcome from "./component/Welcome";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// HERE FOR ROUTING WE HAVE TO DEFINE PATHS SO 
// THROUGH REACT-ROUTER WE CAN ROUTE AND GIVE THE PATH TO INDIVIDUAL COMPONENTS

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;