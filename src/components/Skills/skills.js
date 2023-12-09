import React from 'react';
import './skills.css';
import UIDesign from '../../assets/uiux.png';
import WebDesign from '../../assets/computer-screen.png';
import AppDesign from '../../assets/phone-screen.png';

function skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I'm a skilled and passionated Web Designer with experience in creating visually appearing and user-friendly websites. I have a strong understanding for design. I am proficient in HTML, CSS and javascript as well as design software such as Adobe Photoshop. </span>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>This is a demo text, you can write your own contant here.</p>

            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>This is a demo text, you can write your own contant here.</p>

            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>This is a demo text, you can write your own contant here.</p>

            </div>
        </div>
        </div>

    </section>
  )
}

export default skills