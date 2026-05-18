import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import Login from "./pages/login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

