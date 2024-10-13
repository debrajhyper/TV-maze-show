import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* navbar start */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">UK Show</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">TV Show</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/not">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/not">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/not">Premium</a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* navbar end */}
    </div>
  )
}

export default Navbar
