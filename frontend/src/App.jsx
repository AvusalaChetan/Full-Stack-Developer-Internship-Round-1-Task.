import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gray-100">
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<div className=""><Dashboard/></div>} />
    </Routes>
    </div>
  );
}

export default App;
