import React, { useState } from 'react'
import './css/Landing.css'
import Navbar from './Navbar'
import Message from './Message';
import Footer from './Footer';

function Landing() {

    const [isActive, setIsActive] = useState(true);

    const clickHandler = () => {
        setIsActive(!isActive);
    }


     // Initialize state to track which card is active. False means it's collapsed.
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle the card when clicked
    const faqHandler = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  // Toggle between active and not active
    }

    return (
        <div className='landing-component'>
            <Navbar />

            <div className="main-section">
                <div className="main-top">
                    <div className="main-top-left">
                        <i class="ri-check-fill"></i>
                    </div>
                    <div className="main-top-center">
                        <div className="center-container">
                            <div className="center-container-left">
                                <div className="center-left-circle"></div>
                                <div className="center-left-circle"></div>
                                <div className="center-left-circle"></div>
                                <div className="center-left-circle"><p>5M</p></div>
                            </div>
                            <div className="center-container-right">
                                <p>Trusted by 50M+ People Across The Globe</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-top-right">
                        <div className={`top-right-contain ${isActive ? '' : 'notActive'}`} onClick={clickHandler}>
                            <div className="top-right-circle">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-heading">
                    <h1>Your AI-Powered Personal Wealth Advisor</h1>
                    <p>Transforming investment for young adults with AI-driven portfolio management and insights</p>
                    <button className='explore-btn'>
                        Explore More <i class="ri-arrow-right-up-line"></i>
                    </button>
                </div>

                <div className="main-marketing">
                    <div className="marketing">
                        <div className={`marketing-border ${isActive ? '' : 'notActive'}`}> </div>
                        <div className="marketing-circle">
                            <p>Marketing</p>
                        </div>
                    </div>

                    <div className="rating">
                        <div className="stars">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div>
                        <p>Five Star Recommend</p>
                    </div>

                    <div className="ai-help">
                        <div className="ai-help-left"></div>
                        <div className="ai-help-right">
                            <p>AI Helps Me Revitalize My Business.</p>
                        </div>
                    </div>

                    <div className="business">
                        <div className={`business-border ${isActive ? '' : 'notActive'}`}> </div>
                        <div className="business-circle">
                            <p>Business</p>
                        </div>
                    </div>

                </div>

                <div className="main-bottom">
                    <div className="main-bottom-top">
                        <p>TRUSTED BY AMAZING COMPANIES <span>WORLDWIDE</span></p>
                    </div>
                    <div className={`companies ${isActive ? '' : 'notActive'}`}>
                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>

                        <img className='companies-logo' src='./src/assets/5.png'></img>
                        <img className='companies-logo' src='./src/assets/6.png'></img>
                        <img className='companies-logo' src='./src/assets/7.png'></img>
                        <img className='companies-logo' src='./src/assets/8.png'></img>
                    </div>
                </div>
            </div>

            <div className="job-section">
                <div className="job-top">
                    <div className="job-top-left">
                        <img src='./src/assets/2.png'></img>
                    </div>
                    <div className="job-top-right">
                        <div className="job-right-top"><p>OUR MISSION</p></div>
                        <div className="job-right-center"><h2>We Are Creating Modern & High Quality Software
                            For Your Business</h2></div>
                        <div className="job-right-bottom"><p>At StockWise, we democratize financial expertise.
                            Our AI-driven platform acts as your personal wealth advisor, monitoring your portfolio,
                            providing performance insights,
                            and delivering strategies for optimal returns—ensuring your savings are not just
                            stored but strategically grown</p></div>
                    </div>
                </div>

                <div className="job-center">
                    <div className="job-center-left">
                        <img src='./src/assets/11.png'></img>
                    </div>
                    <div className="job-center-right">
                        <div className="job-center-top">
                            <p className='stock'>STOCK WISE INSIGHTS</p>
                            <h2>Transforming investing for youngster</h2>
                            <p className='transform'>Transforming investment for young adults with AI-driven portfolio
                                management and insights</p>
                        </div>
                        <div className="job-center-middle">
                            <div className="center-middle-left">
                                <div className="center-card">
                                    <section className="card-title">
                                        <h4>Opportunities at your fingertips</h4>
                                        <i class="ri-arrow-right-line"></i>
                                    </section>
                                    <p>Sell smarter and faster while leaving time-consuming tasks to automation.</p>
                                </div>

                                <div className="center-card">
                                    <section className="card-title">
                                        <h4>Timely selling strategies</h4>
                                        <i class="ri-arrow-right-line"></i>
                                    </section>
                                    <p>Sell smarter and faster while leaving time-consuming tasks to automation.</p>
                                </div>


                            </div>
                            <div className="center-middle-right">
                                <div className="center-card">
                                    <section className="card-title">
                                        <h4>Concise, insightful analysis</h4>
                                        <i class="ri-arrow-right-line"></i>
                                    </section>
                                    <p>Scale faster with a unified, intelligent customer support platform.</p>
                                </div>

                                <div className="center-card">
                                    <section className="card-title">
                                        <h4>Identify multibagger stocks</h4>
                                        <i class="ri-arrow-right-line"></i>
                                    </section>
                                    <p>Attract, engage, and nurture your customers through the engagement
                                        channels they love.</p>
                                </div>

                            </div>
                        </div>
                        <div className="job-center-bottom">
                            <div className="center-card-bottom">
                                <section className="card-title-bottom">
                                    <h4>All products & trials</h4>
                                    <i class="ri-arrow-right-line"></i>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="job-bottom">
                    <div className="job-bottom-top">
                        <div className="bottom-top-left">
                            <h3>We Provide brilliant
                                Ideas & Adding
                            </h3>
                            <p>
                                We are a full-service creative agency that helps businesses
                                build brands, tell stories, and engage audiences through bold
                                and strategic design.
                            </p>
                        </div>
                        <div className="bottom-top-right">
                            <div className="top-right">
                                <div className="right-check">
                                    <i class="ri-check-line"></i>
                                </div>
                                <h4>350</h4>
                                <p>Completed Projects</p>
                            </div>

                            <div className="top-right">
                                <div className="right-check">
                                    <i class="ri-check-line"></i>
                                </div>
                                <h4>4.7k</h4>
                                <p>Users Happy</p>
                            </div>

                            <div className="top-right">
                                <div className="right-check">
                                    <i class="ri-check-line"></i>
                                </div>
                                <h4>345k</h4>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="job-bottom-end">
                        <div className="bottom-end-left">
                            <p>SPOTLIGHT</p>
                        </div>

                        <div className="bottom-end-center">
                            <h4>Get Started with Stock-Wise Today!</h4>
                            <p>Start your 14-day free trial. No credit card required.</p>
                            <section className="buttons-bottom">
                                <button className='trial'>TRY NOW <i class="ri-arrow-right-s-line"></i></button>
                                <button className='demo'>Get a Demo <i class="ri-arrow-right-s-line"></i></button>
                            </section>
                        </div>

                        <div className="bottom-end-right">

                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-section">
                <div className="faq-content">
                    <h2>FAQs</h2>
                    <p>Say goodbye to the hassle of managing multiple accounts across different financial institutions.</p>
                    <div className={`faq-card ${activeIndex === 0 ? 'active' : ''}`} onClick={() => faqHandler(0)}>
                        <div className="faq-question">
                            <h4>How does AI Generation Create Image work?</h4>
                            <i className={activeIndex === 0 ? 'ri-subtract-line' : 'ri-add-line'}></i>
                        </div>
                        <div className="faq-detail">
                            <p>AI Generation Create Image is an advanced technology that utilizes
                                Artificial Intelligence (AI) algorithms to automatically generate highquality,
                                realistic images.</p>
                        </div>
                    </div>

                    <div className={`faq-card ${activeIndex === 1 ? 'active' : ''}`} onClick={() => faqHandler(1)}>
                        <div className="faq-question">
                            <h4>What is AI Generation Create Image?</h4>
                            <i className={activeIndex === 1 ? 'ri-subtract-line' : 'ri-add-line'}></i>
                        </div>
                        <div className="faq-detail">
                            <p>AI Generation Create Image is an advanced technology that utilizes
                                Artificial Intelligence (AI) algorithms to automatically generate highquality,
                                realistic images.</p>
                        </div>
                    </div>

                    <div className={`faq-card ${activeIndex === 2 ? 'active' : ''}`} onClick={() => faqHandler(2)}>
                        <div className="faq-question">
                            <h4>Can AI-generated images match human-created art?</h4>
                            <i className={activeIndex === 2 ? 'ri-subtract-line' : 'ri-add-line'}></i>
                        </div>
                        <div className="faq-detail">
                            <p>AI Generation Create Image is an advanced technology that utilizes
                                Artificial Intelligence (AI) algorithms to automatically generate highquality,
                                realistic images.</p>
                        </div>
                    </div>

                    <div className={`faq-card ${activeIndex === 3 ? 'active' : ''}`} onClick={() => faqHandler(3)}>
                        <div className="faq-question">
                            <h4>What are the applications of AI Generation Create Image?</h4>
                            <i className={activeIndex === 3 ? 'ri-subtract-line' : 'ri-add-line'}></i>
                        </div>
                        <div className="faq-detail">
                            <p>AI Generation Create Image is an advanced technology that utilizes
                                Artificial Intelligence (AI) algorithms to automatically generate highquality,
                                realistic images.</p>
                        </div>
                    </div>

                </div>

            </div>

            <Message/>

            <Footer/>

        </div>
    )
}

export default Landing
