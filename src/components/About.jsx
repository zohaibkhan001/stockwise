import React from 'react'
import Navbar from './Navbar'
import './css/About.css'
import Footer from './Footer'

function About() {
    return (
        <div className='about-component'>
            <Navbar />

            <div className="about-heading">
                <p>Home <i class="ri-circle-fill"></i> Page <i class="ri-circle-fill"></i> About Us</p>
                <h3>About Us</h3>
                <p>Detail the two main products offered by Stock-Wise, their features, and benefits. Encourage
                    users to sign up or learn more.</p>
            </div>

            <div className="provide">
                <div className="provide-left">
                    <h2>We Provide Personal
                        Wealth Advisor</h2>
                    <p>Our AI-driven personal wealth advisor offers personalized investment strategies,
                        portfolio monitoring, and performance insights. This service ensures that users'
                        investments are optimized for maximum returns</p>
                    <p className='check-list'><i class="ri-check-line"></i> Customizable investment strategies</p>
                    <p className='check-list'><i class="ri-check-line"></i> Real-time portfolio monitoring</p>
                    <p className='check-list'><i class="ri-check-line"></i> High-alpha stock recommendations</p>
                    <p className='check-list'><i class="ri-check-line"></i> High-alpha Educational content on financial strategies</p>
                    <button className='find-more-btn'>Find Out More</button>
                </div>
                <div className="provide-right">
                    <div className="provide-right-top">

                    </div>
                    <div className="provide-right-bottom">
                        <div className="right-bottom-left">
                            <h3>350+</h3>
                            <p>Completed projects</p>
                        </div>
                        <div className="right-bottom-right">
                            <h3>3500+</h3>
                            <p>Great photography</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="powered">
                <div className="powered-left">
                    <div className="powered-left-top">
                        <p>Risk Tolerance</p>
                    </div>

                    <div className="powered-left-center">
                        <div className="powered-card">
                            <section>
                                <h6>Financial Wellbeing</h6>
                                <p>Investing to maintain and
                                    improve one's financial health.</p>
                            </section>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>

                        <div className="powered-card">
                            <section>
                                <h6>Future Security</h6>
                                <p>Building a nest egg for longterm
                                    security and peace of mind</p>
                            </section>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>

                        <div className="powered-card">
                            <section>
                                <h6>Debt Freedom</h6>
                                <p>Investing to pay off loans
                                    and become debt-free.</p>
                            </section>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>

                        <div className="powered-card">
                            <section>
                                <h6>Wealth Accumulation</h6>
                                <p>Aiming to become a millionaire
                                    through strategic investments.</p>
                            </section>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>

                        <div className="powered-card">
                            <section>
                                <h6>Custom Goal</h6>
                                <p>Providing a space for users to
                                    type in their unique investment
                                    objectives.</p>
                            </section>
                            <i class="ri-arrow-right-s-line"></i>
                        </div>
                    </div>

                    <div className="powered-left-bottom">
                        <h5>INVESTMENT GOALS</h5>
                        <i class="ri-arrow-right-s-line"></i>
                    </div>

                </div>
                <div className="powered-right">
                    <div className="powered-right-top">
                        <h1>Your life's work,<br></br> powered by our life's work</h1>
                        <ul>
                            <li>Introduce a drop down menu with the following options: High,
                                Medium, Low</li>
                            <li>Allow users to manually enter their age to ensure precise data
                                collection</li>
                        </ul>
                    </div>

                    <div className="powered-right-bottom"></div>
                </div>
            </div>

            <div className="provide">
                <div className="provide-left">
                    <h2>We Provide Investment
                        Chatbot</h2>
                    <p>An AI-powered chatbot that simplifies investment advice by providing real-time
                        data and insights on various stocks. The chatbot answers queries, offers
                        recommendations, and educates users on investment strategies</p>
                    <p className='check-list'><i class="ri-check-line"></i> Real-time data and insights</p>
                    <p className='check-list'><i class="ri-check-line"></i> Interactive conversational interface</p>
                    <p className='check-list'><i class="ri-check-line"></i> Access to financial models and DCFs</p>
                    <p className='check-list'><i class="ri-check-line"></i> Analyst estimates and consensus ratings</p>
                    <button className='find-more-btn'>Find Out More</button>
                </div>
                <div className="provide-right">
                    <div className="provide-right-top">

                    </div>
                    <div className="provide-right-bottom">
                        <div className="right-bottom-left">
                            <h3>350+</h3>
                            <p>Completed projects</p>
                        </div>
                        <div className="right-bottom-right">
                            <h3>3500+</h3>
                            <p>Great photography</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="signup-banner">
                <div className="banner-left">
                    <h1><span className='signup'>Sign Up</span> for Personalized
                        Wealth Management!</h1>
                </div>
                <div className="banner-right">
                    <h4>Let's get you started.</h4>
                    <button className='signup-btn'>SIGN UP NOW <i class="ri-arrow-drop-right-line"></i></button>
                </div>
            </div>

            <div className="blogs">
                <div className="blogs-container">
                    <div className="blogs-top">
                        <h6>Our Blogs</h6>
                        <a href="#">View All</a>
                    </div>
                    <div className="blogs-bottom">
                        <div className="blogs-bottom-left">
                            <div className="content-top">
                            </div>
                            <div className="content-bottom">
                                <p className='group'>Creative <i class="ri-checkbox-blank-circle-fill"></i>
                                    <span>Oct 12, 2023</span></p>
                                <p className='title'>Exploring AI Generation Create
                                    Image</p>
                                <p className='content'>Cryptocurrencies operate on decentralized
                                    networks...</p>
                            </div>
                        </div>
                        <div className="blogs-bottom-center">
                            <div className="content-top">

                            </div>
                            <div className="content-bottom">
                                <p className='group'>3D CARTOON <i class="ri-checkbox-blank-circle-fill"></i>
                                    <span>Oct 12, 2023</span></p>
                                <p className='title'>Breaking the Barriers of
                                Creativity</p>
                                <p className='content'>Cryptocurrencies operate on decentralized
                                    networks...</p>
                            </div>
                        </div>
                        <div className="blogs-bottom-right">
                            <div className="content-top">
                            </div>
                            <div className="content-bottom">
                                <p className='group'>REALISTIC <i class="ri-checkbox-blank-circle-fill"></i>
                                    <span>Oct 12, 2023</span></p>
                                <p className='title'>A Game-Changer for ECommerce</p>
                                <p className='content'>Cryptocurrencies operate on decentralized
                                    networks...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default About
