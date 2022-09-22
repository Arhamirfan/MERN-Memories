import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Navbar />
      <section className="signup">
        <div className="container mt-5">
          <div class="card">
            <div class="card-header text-white bg-dark">Login</div>
            <div class="card-body">
              {/* <h5 class="card-title">Register Your account</h5>
    <p class="card-text"></p> */}

              <div className="row">
                <div className="col-6">
                  <figure>
                    <img src="" alt="imagehere" />
                  </figure>
                  <NavLink to="/signup">Create an account</NavLink>
                </div>
                <div className="col-6">
                  <h1 className="form-title">Sign In</h1>
                  <form className="register-form" id="register-form">
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
                    <button type="submit" className="mt-5 btn btn-primary">
                      Login
                    </button>

                    <div className="row mt-5 mb-5">
                      <p>
                        Or login with <strong> FB. G T</strong>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
