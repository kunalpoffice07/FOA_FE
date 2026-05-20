import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-xl border border-zinc-200">

        {/* TITLE */}
        <h1 className="text-[#3b2416] text-4xl font-bold text-center mb-3">
          Welcome
        </h1>

        {/* SUBTITLE */}
        <p className="text-zinc-500 text-center mb-10">
          Continue your journey with Janubai Foods
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4">

          {/* LOGIN */}
          <Link
            to="/login"
            className="w-full bg-[#3b2416] text-white text-center py-3 rounded-full font-medium hover:bg-[#523423] transition duration-300"
          >
            Login
          </Link>

          {/* REGISTER */}
          <Link
            to="/register"
            className="w-full border border-[#3b2416] text-[#3b2416] text-center py-3 rounded-full font-medium hover:bg-[#3b2416] hover:text-white transition duration-300"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}