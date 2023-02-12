import "./App.css";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinUser from "./users/JoinUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import LoginUser from "./users/LoginUser";
import Items from "./pages/Items";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<Items />} />
          <Route exact path="/members/new" element={<JoinUser />} />
          <Route exact path="/members/login" element={<LoginUser />} />
          <Route exact path="/members/:id" element={<ViewUser />} />
          <Route exact path="/members/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
