import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoMenuOutline, IoArrowBackOutline } from "react-icons/io5";

import { useState } from "react";

import img4 from "../assets/4.jpg";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleCloseClick = () => {
    const fadeOutDiv = document.querySelector("nav");
    fadeOutDiv.classList.add("fadeOut");
    setTimeout(() => {
      setMenu(false);
      fadeOutDiv.classList.remove("fadeOut")
    }, 500);
  };

  return (
    <nav className="fadeIn">
      {menu === false ? (
        <div className="fadeIn2">
          <i onClick={() => setMenu(true)}>
            <IoMenuOutline />
          </i>
        </div>
      ) : (
        <div>
          <i onClick={() => handleCloseClick()} className="fadeIn">
            <IoArrowBackOutline />
          </i>
          <div className="imgContainer">
            <img
              src={img4}
              alt="Model wearing purple and pink Nike Air shoes on basketball court"
            />
          </div>
          <section>
            <form action="">
              <label htmlFor="email" className="visuallyHidden">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="email"
              />
              <label htmlFor="password" className="visuallyHidden">
                Password:
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="pass"
                />
                <a href="#" className="forgot">
                  Forgot?
                </a>
              </div>
              <input type="submit" value="SIGN IN" className="submit" />
            </form>
            <div className="buttonContainer2">
              <div className="button fb">
                <p>FACEBOOK</p>
                <i>
                  <FaFacebookF />
                </i>
              </div>
              <div className="button tw">
                <p>TWITTER</p>
                <i>
                  <FaTwitter />
                </i>
              </div>
            </div>
          </section>
        </div>
      )}
    </nav>
  );
};

export default Nav;
