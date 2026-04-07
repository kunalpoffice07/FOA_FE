import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/APIs/api";

export default function Login() {
    const [form, setForm] = useState({
        userEmail: "",
        Password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("auth/login", form);

            localStorage.setItem("token", res.data.token)

            navigate("/user");
        }
        catch (err) {
            setError("Invalid credentials");

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-md">

                <h1 className="text-3xl font-bold mb-2 text-center text-black">
                    Welcome Back
                </h1>

                <p className="text-gray-500 text-center mb-6">
                    Login to your account
                </p>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                        {error}
                    </p>
                )}

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        name="userEmail"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}
