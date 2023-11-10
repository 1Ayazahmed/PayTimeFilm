import Header from "./Components/Header";
import Card from "./Components/Card";
import { Routes, Route } from "react-router-dom";
import Addmovies from "./Components/Addmovies";
import Detail from "./Components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/addmovies" element={<Addmovies />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
