import { NavLink } from "react-router-dom"

const Fourth = () => {
  return (
    <div>
        <div className="container-item">
            <ul>
                <NavLink to='itfourth'>
                    <li>IT</li>
                </NavLink>
                <NavLink to='csefourth'>
                    <li>CSE</li>
                </NavLink>
                <NavLink to='aidsfourth'>
                    <li>AIDS</li>
                </NavLink>
                <NavLink to='ecefourth'>
                    <li>ECE</li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Fourth