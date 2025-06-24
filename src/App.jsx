import "./App.css";
import { Home, Player, Login } from "./assets/pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />}/>
      </Routes>
    </>
  );
}

export default App;
