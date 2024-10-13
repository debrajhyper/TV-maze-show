import React from 'react'

const NotFound = () => {
  return (
    <div>
      {/* main start */}
      <div className='bg-dark vh-100'>
        <div className='row d-flex align-items-center justify-content-center '>
          <div className='col-xxl-6 col-md-12 pt-5'>
            <div className="bg-dark  card p-5 m-5" >
              <div className="card-body text-center text-white ">
                <h1 className="card-title ">404</h1><br />
                <h6 className="card-subtitle mb-2 text-muted">Error - Page Not Found...</h6>
                <hr />
                <h5 className="card-text pt-3">Please check the URL.</h5><br />
                <p>Otherwise, <a href="/" className="card-link">Click here</a> to be redirected to the homepage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main end */}
    </div>
  )
}

export default NotFound
