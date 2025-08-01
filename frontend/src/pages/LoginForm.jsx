import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  };
  return (
    <div>
      <div className="min-h-screen text-black flex items-center justify-center bg-gray-200">
        <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Intern Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border p-2 mb-4 rounded  border-b-2 border-b-gray-800 border-transparent outline-0  "
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border p-2 mb-4 rounded  border-b-2 border-b-gray-800 border-transparent outline-0"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full p-2  hover:bg-blue-700 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
