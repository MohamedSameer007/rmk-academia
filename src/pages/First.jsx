import { NavLink } from "react-router-dom"

const First = () => {
    return (
            <div>
                <div className="container-item">
                    <ul>
                        <NavLink to='itfirst'>
                            <li>IT</li>
                        </NavLink>
                        <NavLink to='csefirst'>
                            <li>CSE</li>
                        </NavLink>
                        <NavLink to='aidsfirst'>
                            <li>AIDS</li>
                        </NavLink>
                        <NavLink to='ecefirst'>
                            <li>ECE</li>
                        </NavLink>
                    </ul>
                </div>
        </div>
    )
}

export default First