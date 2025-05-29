import { Outlet } from "react-router-dom"
import Fourth from "../pages/Fourth"

const FourthYearLayout = () => {
  return (
    <div className="container">
      <Fourth />
      <Outlet />
    </div>
  )
}

export default FourthYearLayout