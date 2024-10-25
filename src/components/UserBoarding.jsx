import React from 'react'
import './css/UserBoarding.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaFistRaised } from "react-icons/fa";
import { GrNodes } from "react-icons/gr";
import { LiaCubeSolid } from "react-icons/lia";
import { GoStack } from "react-icons/go";
import { PiBrainLight } from "react-icons/pi";
import Message from './Message';

function UserBoarding() {
    return (
        <div className='user-component'>
            <Navbar />
            <div className="user-heading">
                <p>Home <i class="ri-circle-fill"></i> User Onboarding Process</p>
                <h3>User Onboarding Process</h3>
                <p>Explore our range of cutting-edge services designed to elevate your business. From digital
                    marketing and branding to AI-driven solutions</p>
            </div>

            <div className="ai-solution">
                <div className="solution-container">
                    <div className="solution-top">
                        <h1>Find an AI solution for your business</h1>
                        <p>Experience the future of communication with our AI-powered chat solution.</p>
                    </div>
                    <div className="solution-bottom">
                        <div className="solution-card">
                            <div className="solution-card-top">
                                <div className="card-icon">
                                    <FaFistRaised />
                                </div>
                                <i class="ri-arrow-right-up-line"></i>
                            </div>
                            <div className="solution-card-bottom">
                                <h4>AI-Powered
                                    Chatbots</h4>
                                <p>Implement intelligent chatbots
                                    that can handle customer
                                    inquiries, provide</p>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className="solution-card-top">
                                <div className="card-icon">
                                    <GrNodes />
                                </div>
                                <i class="ri-arrow-right-up-line"></i>
                            </div>
                            <div className="solution-card-bottom">
                                <h4>Embracing
                                    Multilingual Support</h4>
                                <p>Expand your reach and cater to a
                                    global audience with chat
                                    services available</p>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className="solution-card-top">
                                <div className="card-icon">
                                    <LiaCubeSolid />
                                </div>
                                <i class="ri-arrow-right-up-line"></i>
                            </div>
                            <div className="solution-card-bottom">
                                <h4>Integration
                                    Capabilities</h4>
                                <p>Seamlessly integrate AI chat
                                    services into your existing
                                    systems</p>
                            </div>
                        </div>

                        <div className="solution-card">
                            <div className="solution-card-top">
                                <div className="card-icon">
                                    <GoStack />
                                </div>
                                <i class="ri-arrow-right-up-line"></i>
                            </div>
                            <div className="solution-card-bottom">
                                <h4>Proactive
                                    Engagement</h4>
                                <p>Initiate proactive conversations
                                    with customers based on their</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kyc">
                <div className="kyc-container">
                    <div className="kyc-left">
                    <div className="kyc-step">
                            <section className='kyc-index'>1</section>
                            <section className='step-info'>
                                <h5>Sign Up & KYC</h5>
                                <p>Tell us about you
                                    and do a risk profile.</p>
                            </section>
                        </div>

                        <div className="kyc-step">
                            <section className='kyc-index'>2</section>
                            <section className='step-info'>
                                <h5>Choose a Portfolio</h5>
                                <p>Explore our products and find
                                    the most suitable one.</p>
                            </section>
                        </div>  

                        <div className="kyc-step">
                            <section className='kyc-index'>3</section>
                            <section className='step-info'>
                                <h5>Invest in a click</h5>
                                <p>And watch your wealth grow
                                    at leasure</p>
                            </section>
                        </div>

                    </div>
                    <div className="kyc-center">
                        <section className='kyc-center-head'>
                            <h5>Invest in a few clicks</h5>
                            <p>Your perfect investment is just 3 easy steps away</p>
                        </section>
                        <section className='kyc-center-icon'><PiBrainLight /></section>
                        <button className='kyc-center-button'>Get Started</button>
                    </div>
                    <div className="kyc-right">
                        <img src="/assets/15.png"></img>
                    </div>
                </div>
            </div>

            <Message />
            <Footer />
        </div>
    )
}

export default UserBoarding
