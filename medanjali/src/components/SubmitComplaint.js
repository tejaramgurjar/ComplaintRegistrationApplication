import React from 'react';
import { Link } from 'react-router-dom';

function SubmitComplaint() {
  return (
    <div>
      <section >
        <div className="container py-5 h-100">
          <div className="row justify-content-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "2rem" }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Submit Complaint</h2>
                    
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="title">Title</label>
                      <input type="text" id="title" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="description">Description</label>
                      <textarea id="description" className="form-control form-control-lg"></textarea>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="category">Category</label>
                      <input type="text" id="category" className="form-control form-control-lg" />
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                      Submit
                    </button>
                  </div>
                  
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubmitComplaint;
