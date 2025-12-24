import React from 'react';

const GetInvolved = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Get Involved</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Get Involved</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Get Involved Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">Join the Circle</h1>
          </div>
          
          <div className="row g-5">
            <div className="col-lg-6" id="membership-sign-ups">
              <h3 className="mb-4">Membership Sign-Ups</h3>
              <p className="mb-4">
                Become a member of Art Circle Foundation and be part of our vibrant community. 
                Enjoy exclusive access to events, workshops, and cultural programs.
              </p>
              <button className="btn btn-primary py-3 px-5">Sign Up Now</button>
            </div>
            
            <div className="col-lg-6" id="become-a-sponsor">
              <h3 className="mb-4">Become a Sponsor</h3>
              <p className="mb-4">
                Support our mission by becoming a sponsor. Help us continue to bring quality 
                cultural events and programs to the community.
              </p>
              <button className="btn btn-primary py-3 px-5">Partner With Us</button>
            </div>
          </div>
        </div>
      </div>
      {/* Get Involved End */}
    </>
  );
};

export default GetInvolved;
