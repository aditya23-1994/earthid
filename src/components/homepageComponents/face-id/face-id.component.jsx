import React from 'react';
import './face-id.styles.scss';
import icon_dynamic_image from '../../../assest/Home/icon_dynamic_image.png';

export const FaceId = () => (
  <div className='faceId-content'>
    <div className='faceId-content_text'>
      <p className='faceId-content_text-1'>Introducing</p>
      <p className='faceId-content_text-2'>Earth ID Platform Offers Following Services</p>
      <p className='faceId-content_text-3'>
        Earth ID pioneered the ID + selfie approach to identity verification, leveraging 10 years of
        real-world production data and hundreds <br />
        <span className='faceId-content_text-3-spaning'>
          of millions of domain-specific data points todeliver a better, smarter, faster online
          identity experience.
        </span>
      </p>
    </div>
    <div className='faceId-content_dynamic'>
      <div className='faceId-content_dynamic-1'>
        <p className='faceId-content_dynamic-1-title'>Decentralized IDENTITY </p>
        <p className='faceId-content_dynamic-1-desc'>
          Earth ID pioneered the ID + selfie approach to identity verification, leveraging 10 years.
          Real-world production data and hundreds of millions of domain-specific data points to
          deliver a better, smarter. Faster online identity experience.
        </p>
      </div>
      <img src={icon_dynamic_image} className='faceId-content_dynamic-1-img' alt='dynamicImage' />
    </div>
  </div>
);
