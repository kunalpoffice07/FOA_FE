import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import landingimage from "../assets/janubai-foods.png";

export default function PublicHome() {
    return (
        <div
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${landingimage})`,
            }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-28 flex flex-col sm:flex-row gap-4">

                {/* ORDER NOW */}
                <Link
                    to="/auth"
                    className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
                >
                    ORDER NOW
                </Link>

                {/* EXPLORE FOOD */}
                <Link
                    to="/menu"
                    className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
                >
                    EXPLORE FOOD
                </Link>

            </div>
        </div>

    );
}