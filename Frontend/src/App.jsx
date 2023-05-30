import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
