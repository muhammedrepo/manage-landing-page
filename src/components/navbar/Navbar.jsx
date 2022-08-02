import React, { useState, useEffect, useRef } from "react";

import { Button, Logo } from "../../components";
import { image } from "../../util";
import { navLinks } from "../../util/links";
import { Wrapper } from "./NavbarStyles";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <Wrapper>
      <div className="container mx-auto">
        <div className="nav-center">
          <div className="nav-header pb-4 lg:pb-0">
            <Logo />

            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? (
                <img className="icon-close" src={image.closeIcon} alt="close" />
              ) : (
                <img
                  className="icon-hamburger
                "
                  src={image.hamburger}
                  alt="open"
                />
              )}
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {navLinks.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav-button">
            <Button title="get started" url="/" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
