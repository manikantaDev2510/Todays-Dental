import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm navbar-light sticky-top bg-white px-4 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <Link className="navbar-brand  text-primary fs-1 fw-bold" to="/">Todays Dental</Link>

        {/* Toggle button for small screens */}
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

        {/* FIXED: Added id="navbarNav" */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item mx-2"><Link className="nav-link fw-semibold fs-4 text-item" to="/">Home</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link fw-semibold fs-4" to="/about">About</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link fw-semibold fs-4" to="/services">Services</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link fw-semibold fs-4" to="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}