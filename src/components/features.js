import React from "react";
import branding from '../images/branding.svg'

export default function Features(){

    return(
        <>
    <section className="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-between">
                <div className="col-md-4">
                  <div className="feature-card">
                    <i className="fa fa-check-circle-o "></i>
                    <h5>Verified</h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-card">
                    <i className="fa fa-file-text-o "></i>
                    <h5>Short</h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-card">
                    <i className="fa fa-users "></i>
                    <h5>User Friendly</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="branding text-center">
        <div className="container">
          <img src={branding}></img>
        </div>
      </section>
    </>
    )

}