import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <Navbar />
      <section className="signup">
        <div className="container mt-5">
          <div class="card">
            <div class="card-header text-white bg-dark">
              <h3>Sign Up</h3>
            </div>
            <div class="card-body">
              {/* <h5 class="card-title">Register Your account</h5>
    <p class="card-text"></p> */}

              <div className="row">
                <div className="col-8">
                  <div className="signup-form">
                    {/* <h2 className="form-title">Sign up</h2> */}
                    <form className="register-form" id="register-form">
                      <label htmlFor="name" class="col-form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        autoComplete="off"
                        placeholder="Your Name"
                      />

                      <label htmlFor="name" class="col-form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="form-control"
                        autoComplete="off"
                        placeholder="Your Email"
                      />
                      <label htmlFor="name" class="col-form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        class="form-control"
                        autoComplete="off"
                        placeholder="Your Phone no."
                      />
                      <label htmlFor="name" class="col-form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        class="form-control"
                        autoComplete="off"
                        placeholder="Password"
                      />
                      <label htmlFor="name" class="col-form-label">
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        name="cpassword"
                        id="cpassword"
                        class="form-control"
                        autoComplete="off"
                        placeholder="Confirm Password"
                      />
                      <button type="submit" className="mt-3 btn btn-primary">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-4">
                  <div className="signup-image">
                    <figure>
                      <img src="" alt="imagehere" />
                    </figure>
                    <NavLink to="/login">I am already registered</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
