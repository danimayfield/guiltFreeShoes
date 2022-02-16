import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import { useState } from "react";


const Nav = () => {
    const [menu, setMenu] = useState(false);

    return (
            <nav>
        {menu === false ? (
          <>
            <i onClick={() => setMenu(true)}>
              <IoMenuOutline />
            </i>
          </>
        ) : (
          <>
            <i onClick={() => setMenu(false)}>
              <IoCloseOutline />
            </i>
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
                />
                <label htmlFor="password" className="visuallyHidden">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <input type="submit" value="SIGN IN" className="button" />
              </form>
              <div className="button">
                <p>Facebook</p>
                <i>
                  <FaFacebookF />
                </i>
              </div>
              <div className="button">
                <p>Twitter</p>
                <i>
                  <FaTwitter />
                </i>
              </div>
            </section>
          </>
        )}
      </nav>
    )
}

export default Nav