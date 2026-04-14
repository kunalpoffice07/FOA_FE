import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import Login from "./pages/login";
import Register from "./pages/Register";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

