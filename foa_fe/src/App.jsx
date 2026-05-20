import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import Login from "./pages/login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Menu from "./pages/Menu";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

