import React from "react";
import JogoDaVelha from "./JogoDaVelha";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Pagina2 from "./Pagina2";

function App() {
  return (

    <Router> 
    <Routes> 
      <Route path="/" element={<JogoDaVelha/>}> </Route>
      <Route path="/2" element={<Pagina2/>}> </Route>
    </Routes>

    </Router>
  );
}

export default App;