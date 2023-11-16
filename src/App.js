import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Signup from "./component/Signup";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={ <Signup/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
