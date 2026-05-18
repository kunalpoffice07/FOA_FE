import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-800 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-white text-4xl font-bold text-center mb-3">
          Welcome
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Continue your journey with Janubai Foods
        </p>

        <div className="flex flex-col gap-4">

          <Link
            to="/login"
            className="w-full bg-white text-black text-center py-3 rounded-full font-medium hover:bg-zinc-200 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="w-full border border-zinc-500 text-white text-center py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}