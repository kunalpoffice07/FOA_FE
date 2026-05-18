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

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">


                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* ORDER NOW */}
                  <Link
                        to="/auth"
                        className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
                    >
                        Order Now
                    </Link>

                    {/* EXPLORE FOOD */}
                    <Link
                        to="/menu"
                        className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
                    >
                        Explore Food
                    </Link>

                </div>

            </div>
        </div>
    );
}