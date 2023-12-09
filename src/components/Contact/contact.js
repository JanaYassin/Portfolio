import React from 'react';
import './contact.css';
import walmart from '../../assets/walmart-logo.png';
import Microsoft from '../../assets/microsoft_logo.png';
import Adobe from '../../assets/Adobe-logo.png';
import Facebook from '../../assets/facebook-logo.png';

import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';
import twitterIcon from '../../assets/twitter.png';



function Contact() {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notables companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={walmart} alt='Client' className='clientImg'></img>
                <img src={Adobe} alt='Client' className='clientImg'></img>
                <img src={Microsoft} alt='Client' className='clientImg'></img>
                <img src={Facebook} alt='Client' className='clientImg'></img>
            </div>

        </div>
        <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='ContactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='text' className='email' placeholder='Your Email'/>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt='' className='link' />
                <img src={InstagramIcon} alt='' className='link' />
                <img src={YoutubeIcon} alt='' className='link' />
                <img src={twitterIcon} alt='' className='link' />


            </div>


        </form>

        </div>

    </section>
  )
}

export default Contact