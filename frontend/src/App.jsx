import { BrowserRouter } from "react-router-dom"
import TopNav from "./components/ui/TopNav"
import AppRoutes from "./routes"

export default function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <AppRoutes />
    </BrowserRouter>
  )
}
