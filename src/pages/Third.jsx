import { NavLink } from "react-router-dom"

const Third = () => {
  return (
    <div>
        <div className="container-item">
            <ul>
                <NavLink to='itthird'>
                    <li>IT</li>
                </NavLink>
                <NavLink to='csethird'>
                    <li>CSE</li>
                </NavLink>
                <NavLink to='aidsthird'>
                    <li>AIDS</li>
                </NavLink>
                <NavLink to='ecethird'>
                    <li>ECE</li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Third