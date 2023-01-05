import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <span className="logo-text">Nicola</span>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" title="" alt="" />
              </div>
              <h5>Nicola</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          <Link href="https://www.facebook.com/profile.php?id=100004998013196">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link href="https://twitter.com/ndimant1996">
            <i className="fab fa-twitter" />
          </Link>
          <Link href="https://www.instagram.com/niccidimant/">
            <i className="fab fa-instagram" />
          </Link>
          <Link href="https://www.linkedin.com/in/nicci-dimant-8b0112226/">
            <i className="fab fa-linkedin-in" />
          </Link>
          <Link href="https://github.com/Nicci12">
            <i className="fab fa-github" />
          </Link>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <Link className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </Link>
      </li>
      <li data-menuanchor="about">
        <Link className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </Link>
      </li>
      <li data-menuanchor="services">
        <Link className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </Link>
      </li>
      <li data-menuanchor="work">
        <Link className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </Link>
      </li>
      <li data-menuanchor="contactus">
        <Link className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </Link>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <span className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </span>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <span className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </span>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services">
            <span className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </span>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work">
            <span className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </span>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <span className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </span>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <span className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </span>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
