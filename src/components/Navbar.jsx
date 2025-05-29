import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src="/logo2.gif" alt="logo" className="me-2" style={{ width: '35px' }} />
            <h1 className="navbar-brand mb-0">R.M.K</h1>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-3 ">
                <NavLink className="nav-link" to="/first">1st Year</NavLink>
              </li>
              <li className="nav-item mx-3 ">
                <NavLink className="nav-link" to="/second">2nd Year</NavLink>
              </li>
              <li className="nav-item mx-3 ">
                <NavLink className="nav-link" to="/third">3rd Year</NavLink>
              </li>
              <li className="nav-item mx-3 ">
                <NavLink className="nav-link" to="/fourth">4th Year</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
