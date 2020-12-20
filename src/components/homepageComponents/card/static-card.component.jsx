import React from 'react';
import './static-card.styles.scss';
import phone_img from '../../../assest/Home/phone-img.png';
import phone__img_2 from '../../../assest/Home/phone__img-2.png';
import icon_87 from '../../../assest/Home/icon_87.png';
import network_43 from '../../../assest/Home/network__43.svg';

export const StaticCard = () => (
  <div className='static-card'>
    <div className='static-card_1'>
      <img src={icon_87} alt='icon' className='icon' />
      <p className='static-card-text_bold'>Convert more customers with an award-winning UX.</p>
      <p className='static-card-text_light'>
        Convert more customers faster and dramatically reduce abandonment rates with automated,
        highly accurate user-friendly identity verification solutions.
      </p>
      <button className='static-card_btn'>Learn More</button>
      <img src={phone_img} alt='phone__img' className='phone__img' />
    </div>
    <div className='static-card_1'>
      <img src={network_43} alt='icon' className='icon-1' />
      <p className='static-card-text_bold'>
        Catch more fraud with advanced biometric-based verification.
      </p>
      <p className='static-card-text_light'>
        Stop fraudsters from the start, and keep them out, with solutions that get to the ground
        truth of real-world identity
      </p>
      <button className='static-card_btn'>Learn More</button>
      <img src={phone__img_2} alt='phone__img' className='phone__img' />
    </div>
    <div className='static-card_1'>
      <img src={icon_87} alt='icon' className='icon' />
      <p className='static-card-text_bold'>Convert more customers with an award-winning UX.</p>
      <p className='static-card-text_light'>
        Convert more customers faster and dramatically reduce abandonment rates with automated,
        highly accurate user-friendly identity verification solutions.
      </p>
      <button className='static-card_btn'>Learn More</button>
      <img src={phone_img} alt='phone__img' className='phone__img' />
    </div>
  </div>
);
