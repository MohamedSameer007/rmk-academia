import { NavLink } from "react-router-dom"
const Second = () => {
  return (
      <div>
        <div className="container-item">
            <ul>
                <NavLink to='itsecond'>
                    <li>IT</li>
                </NavLink>
                <NavLink to='csesecond'>
                    <li>CSE</li>
                </NavLink>
                <NavLink to='aidssecond'>
                    <li>AIDS</li>
                </NavLink>
                <NavLink to='ecesecond'>
                    <li>ECE</li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Second

