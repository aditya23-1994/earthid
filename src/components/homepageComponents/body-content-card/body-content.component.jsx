import React from 'react';
import './body-content.styles.scss';
import arrow_1 from '../../../assest/Home/arrow-1.svg';
import union_1 from '../../../assest/Home/Union_1.svg';
import network_back_540 from '../../../assest/Home/network-back_540.png';

export const BodyContentCard = () => (
  <div className='body-content'>
    <div className='body-content_text'>
      <p className='body-content_text-1'>What Makes Earth ID Different?</p>
      <p className='body-content_text-2'>
        Earth ID pioneered the ID + selfie approach to identity verification, leveraging 10 years of
        real-world production data and hundreds of millions of domain-specific data points to
        deliver a better, smarter, faster online identity experience.
      </p>
    </div>
    <div className='body-content_card'>
      <div className='body-content_card-1'>
        <img src={arrow_1} alt='body-card_icon' className='body-content_card-icon' />
        <p className='body-content_card-title'>Fast + Accurate Verifications</p>
        <p className='body-content_card-desc'>
          No more sacrifices. Earth ID automates identity verification so you can quickly onboard
          more customers while enjoying the industry’s highest accuracy rates.
        </p>
        <button className='body-content_card-btn'>Learn more</button>
      </div>
      <div className='body-content_card-1'>
        <img src={union_1} alt='body-card_icon' className='body-content_card-icon' />
        <p className='body-content_card-title'>Global Coverage</p>
        <p className='body-content_card-desc'>
          Know your customers, no matter where they are. Earth ID supports more than 3,500 ID types
          across 200 countries and territories.
        </p>
        <button className='body-content_card-btn'>Learn more</button>
      </div>
      <div className='body-content_card-1'>
        <img src={arrow_1} alt='body-card_icon' className='body-content_card-icon' />
        <p className='body-content_card-title'>Fast + Accurate Verifications</p>
        <p className='body-content_card-desc'>
          No more sacrifices. Earth ID automates identity verification so you can quickly onboard
          more customers while enjoying the industry’s highest accuracy rates.
        </p>
        <button className='body-content_card-btn'>Learn more</button>
      </div>
    </div>
    <img src={network_back_540} alt='bg-img-content-1' className='body-content-2_img' />
  </div>
);
