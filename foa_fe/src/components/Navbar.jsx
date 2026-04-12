import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { token, logout } = useContext(AuthContext);

    return (
        <div className="bg-white p-4 flex justify-between shadow-sm">
            <h1 className="font-semifold">App </h1>

            <div className="space-x-4">
                {token ? (
                    <>
                        <Link to="/home">Home</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/orders">Orders</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )
                }
            </div>
        </div>
    )
}