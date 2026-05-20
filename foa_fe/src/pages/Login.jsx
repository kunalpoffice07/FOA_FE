import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/APIs/api";

export default function Login() {

    const [form, setForm] = useState({
        identifier: "",
        password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const res = await API.post("/auth/login", form);

            
            localStorage.setItem("token", res.data.token);

            
            navigate("/user");

        }
        catch (err) {
            setError("Invalid email/phone or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0] px-4">

            
            <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl border border-zinc-200">

                
                <p className="text-zinc-500 text-center mb-8 text-lg">
                    Login to continue your food journey
                </p>

                
                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                        {error}
                    </p>
                )}

                
                <form onSubmit={handleLogin} className="flex flex-col gap-4">

                    
                    <input
                        type="text"
                        name="identifier"
                        placeholder="Email or Phone"
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b2416]"
                    />

                    
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b2416]"
                    />

                    
                    <button className="w-full bg-[#3b2416] text-white py-3 rounded-full font-medium hover:bg-[#523423] transition duration-300">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}