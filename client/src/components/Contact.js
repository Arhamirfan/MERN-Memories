import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact_info pt-5">
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-lg-3 ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Phone Number</h5>
                  <p class="card-text">03206522050</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Email</h5>
                  <p class="card-text">03206522050</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Email</h5>
                  <p class="card-text">03206522050</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
