import { Outlet } from "react-router-dom"
import Second from "../pages/second"

const SecondYearLayout = () => {
  return (
    <div className="container">
      <Second />
      <Outlet />
    </div>
  )
}

export default SecondYearLayout