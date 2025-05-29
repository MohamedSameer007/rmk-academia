import { Outlet } from "react-router-dom"
import First from "../pages/first"

const FirstYearLayout = () => {
  return (
    <div className="container">
        <First />
        <Outlet />
    </div>
  )
}

export default FirstYearLayout