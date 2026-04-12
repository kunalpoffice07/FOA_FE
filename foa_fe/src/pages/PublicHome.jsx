import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function PublicHome() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex flex-col items-center justify-center h-[80vh]">
                <h1 className="text-3xl font-semibold mb-4">
                    Order easily
                </h1>

                <p className="text-gray-500 mb-6">
                    Clean fast and simple experience
                </p>

                <Link to="/login" className="bg-black text-white px-6 py-3 rounded-lg">
                Get Started
                </Link>
            </div>
        </div>
    );
}