import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkContainer = useRef(null);
  const links = useRef(null);

  // useEffect(() => {
  //   const linkHeight = links.current.getBoundingClientRect().height;
  //   console.log(linkHeight);

  //   if (toggle) {
  //     linkContainer.current.style.height = `${linkHeight}px`;
  //   }
  //   //  else {
  //   //   linkContainer.current.style.height = "0px";
  //   // }
  // }, [toggle]);
  return (
    <>
      <div className="my-nav">
        <div className="row">
          <div className="col-12 burger col-md-3">
            <div>
              <h1>Nabar Logo</h1>
            </div>
            <div className="toggle">
              <i
                onClick={() => {
                  setToggle(!toggle);
                }}
                class={toggle ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </div>
          <div
            className={
              toggle ? "col col-md-5 links show" : "col col-md-5 links "
            }
            ref={linkContainer}
          >
            <ul ref={links}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">School</a>
              </li>
              <li>
                <a href="#">College</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col col-md-4 social">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f   "></i>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i class="fab fa-instagram    "></i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter    "></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
