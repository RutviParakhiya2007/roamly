import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import WiFiFinder from "./pages/wifi/WiFiFinder"
import MenuDecoder from "./pages/menu/MenuDecoder"
import DoctorFinder from "./pages/doctor/DoctorFinder"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wifi" element={<WiFiFinder />} />
      <Route path="/menu" element={<MenuDecoder />} />
      <Route path="/doctors" element={<DoctorFinder />} />
    </Routes>
  )
}
