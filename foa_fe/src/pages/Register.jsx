import { useState } from "react";
import { registerUser } from "../services/APIs/api";
import { useNavigate } from "react-router-dom";


export default function Register() {

    const [form, setForm] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userPassword: ""
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }

    const validateForm = () => {
        const eamilRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const passwordRegex = /^(?=.*[0-9]).{6,}$/;


        const phoneRegex = /^[0-9]{10}$/;


        if (!form.userName.trim()) {
            return "Name is required";
        }


        if (!emailRegex.test(form.userEmail)) {
            return "Invalid email format";
        }


        if (!phoneRegex.test(form.userPhone)) {
            return "Phone number must be exactly 10 digits";
        }


        if (!passwordRegex.test(form.password)) {
            return "Password must be at least 6 characters and include a number";
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
        <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0] px-4">


            <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl border border-zinc-200">


                <p className="text-zinc-500 text-center mb-8 text-lg">
                    Create your Janubai Foods account
                </p>


                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                        {error}
                    </p>
                )}


                <form onSubmit={handleRegister} className="flex flex-col gap-4">


                    <input
                        type="text"
                        name="userName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b2416]"
                    />


                    <input
                        type="email"
                        name="userEmail"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b2416]"
                    />


                    <input
                        type="text"
                        name="userPhone"
                        placeholder="Phone Number"
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
                        Register
                    </button>

                </form>

            </div>
        </div>
    )


}