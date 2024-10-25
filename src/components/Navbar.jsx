import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-component">
            <div className="navbar-top">
                <div className="navbar-top-left">
                    <section className="mail">
                        <i class="ri-mail-line"></i>
                        <p>enquiry@stockmail.com</p>
                    </section>
                    <section className="location">
                        <i class="ri-map-pin-line"></i>
                        <p>160 Broadway 15th floor, New York</p>
                    </section>
                </div>
                <div className="navbar-top-right">
                    <section className="connect">
                        <p>Follow Us</p>
                        <a className="socials" href="">
                            <i class="ri-facebook-fill"></i>
                        </a>
                        <a className="socials" href="">
                            <i class="ri-linkedin-line"></i>
                        </a>
                        <a className="socials" href="">
                            <i class="ri-twitter-fill"></i>
                        </a>
                        <a className="socials" href="">
                            <i class="ri-youtube-fill"></i>
                        </a>
                    </section>
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="navbar-bottom-left">
                <a className="brandLogo" href="">STOCK<span className="brand">WISE</span></a>
                </div>
                <div className="navbar-bottom-center">
                    <Link className="nav-links" to="/">HOME</Link>
                    <Link className="nav-links" to="/about">ABOUT US</Link>
                    <Link className="nav-links" to="/">PRICING</Link>
                    <Link className="nav-links" to="/user">USER ONBOARDING</Link>
                    <Link className="nav-links" to="/">EDUCATION & RESOURCE</Link>
                    <Link className="nav-links" to="/">CONTACT</Link>
                </div>
                <div className="navbar-bottom-right">
                   <section className="search">
                   <i class="ri-search-line"></i>
                   </section>
                   <section className="mobile">

                   <i class="ri-phone-fill"></i>
                   <p className="number"><span>123</span><span>456</span><span>7890</span></p>
                   </section>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
