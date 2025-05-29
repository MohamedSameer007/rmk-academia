import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const PageLayout = () => {
  return (
    <div className="home">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default PageLayout