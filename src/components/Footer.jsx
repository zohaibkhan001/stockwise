import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-component'>
            <div className="footer-top">
                <div className="footer-top-left">
                <Link className="brandLogo" to="/">STOCK<span className="brand">WISE</span></Link>
                    {/* <h3 className='company-name'>STOCK<span className="brand">WISE</span></h3> */}
                </div>
                <div className="footer-top-center">
                    <Link className="nav-links" to="/">HOME</Link>
                    <Link className="nav-links" to="/">SERVICES</Link>
                    <Link className="nav-links" to="/about">ABOUT US</Link>
                    <Link className="nav-links" to="/">BLOG</Link>
                    <Link className="nav-links" to="/">CONTACT</Link>
                    {/* <a className="nav-links" href="">SERVICES</a>
                    <a className="nav-links" href="">PAGE</a>
                    <a className="nav-links" href="">BLOG</a>
                    <a className="nav-links" href="">CONTACT</a> */}
                </div>

                <div className="footer-top-right">
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
                        <i class="ri-instagram-fill"></i>
                    </a>
                    <a className="socials" href="">
                        <i class="ri-youtube-fill"></i>
                    </a>
                </div>
            </div>

            <div className="footer-center">
                <div className="footer-contact">
                    <section className="phone">
                        <i class="ri-phone-line"></i>
                        <p>0123456789</p>
                    </section>

            <section className="mail">
                        <i class="ri-mail-line"></i>
                        <p>stockwise@gmail.com</p>
                    </section>

                    <section className="location">
                        <i class="ri-map-pin-line"></i>
                        <p>710 1st St. Easton, ASIA 18042 | Orange County</p>
                    </section>
                </div>
            
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-center">
                    <div className="footer-bottom-left">
                        <p><i class="ri-copyright-line"></i>2024 STOCK WISE. All Rights Reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <a className="footer-links" href="">Terms of Services</a>
                    <a className="footer-links" href="">Privacy Policy</a>
                    <a className="footer-links" href="">Cookie Policy</a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
