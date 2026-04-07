import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/APIs/api";


export default function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = async () => {
        const data = await getUser();

        if (!data) {
            navigate("/login");
            return;
        }

        setUser(data);
        setLoading(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    if (loading) {
        return (
            <div min-h-screen flex items-center justify-center>
                <p className="text-gray-500">Loading....</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold"> Profile</h1>
                    <button onClick={handleLogout}
                        className="text-sm text-red-500">
                        Logout
                    </button>
                </div>

                <div className="space-y-4">

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{user.userName}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{user.email}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{user.phone}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{user.address}</p>
                    </div>

                </div>
            </div>

        </div>
    )

}