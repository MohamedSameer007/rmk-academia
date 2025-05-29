import { Outlet } from "react-router-dom"
import Third from "../pages/Third"

const ThirdYearLayout = () => {
  return (
    <div className="container">
        <Third />
        <Outlet />
    </div>
  )
}

export default ThirdYearLayout