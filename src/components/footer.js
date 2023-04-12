import React from "react";
import footer from '../images/footer.svg'

export default function Footer(){
    return(
        <>
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={footer}></img>
              <p>Stay Informed , Stay Up2Date</p>
              <p className="address">
                4rd Floor <br />
                Ganesh Meridian <br />
                Ahmedabad <br />
              </p>
            </div>

            <div className="col-md-7">
              <div className="quote">
                “ What you do makes a difference, and you have to decide what
                kind of difference you want to make." - Jane Goodall."
              </div>
            </div>

            <div className="col-md-2">
              <h5 className="about-us">About Us</h5>
              <div className="footer-about">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Donate</a>
                  </li>
                  <li>
                    <a href="/">Email</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright text-center">Copyright &copy; 2023</div>
        </div>
      </footer>

        </>
    )
}