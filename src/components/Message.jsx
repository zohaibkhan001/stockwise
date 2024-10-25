import React from 'react'
import './css/Message.css'

function Message() {
  return (
    <div className='message-component'>
      <div className="message-left">
            <div className="map">
                <img src='/assets/0.png'></img>
            </div>
            <div className="map-foot">
                <h1>Transform Your Investment with
                AI-Driven Stockwise</h1>
            </div>
      </div>

      <div className="message-right">
            <div className="contact-form">
            <h3>Get in Touch</h3>
            <p>Say goodbye to the hassle of managing multiple accounts across
            different financial institutions.</p>
            <form className='message-form'>
                <input type="text" placeholder="Your Name" required></input>
                <input type="email" placeholder="Your Email" required></input>
                <input type="tel" placeholder="Telephone" required></input>
                <input type="text" placeholder="Personal" required></input>
                <textarea placeholder="Message" rows="5" required></textarea>
                <button className='message-btn'>Message <i class="ri-arrow-right-up-line"></i></button>
            </form>
            </div>
            
      </div>
    </div>
  )
}

export default Message
