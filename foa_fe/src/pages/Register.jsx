import { useState } from "react";
import { registerUser } from "../services/APIs/api";
import { useNavigate } from "react-router-dom";


export default function Register() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }

    const validateForm = () => {
        const eamilRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const passwordRegex = /^(?=.*[0-9]).{6,}$/;

        if (!form.name.trim()) {
            return "Name is required"
        }

        if (!eamilRegex.test(form.email)) {
            return "Invalid email format";
        }

        if (!passwordRegex.test(form.password)) {
            return "Password must be atleast 6 characters and include a number";
        }

        return null;
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const validateError = validateForm();

        if (validateError) {
            setError(validateError);
            return;
        }


        try {
            await registerUser(form);
            alert("User Registered Successfully");
            navigate("/login");
        }
        catch (err) {
            alert("Registration failed");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-sm"
            >
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Create Account
                </h1>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-lg"
                />

                <button className="w-full bg-black text-white py-3 rounded-lg">
                    Register
                </button>

            </form>
        </div>
    )


}