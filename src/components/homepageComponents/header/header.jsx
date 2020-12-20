import React from 'react';
import './header.styles.scss';

export const Header = () => (
  <div className='header-content'>
    <div className='content-1'>
      <p className='text-style-1'>Loved by users.</p>
      <p className='text-style-2'>Loathed by fraudsters.</p>
    </div>
    <div className='content-2'>
      <p className='text-style-3'>
        Automate identity verification and KYC with Earth ID&apos;s AI-powered technology.
      </p>
    </div>
    <div className='header-button'>
      <button className='button-header_1'>
        <p className='border-para_1'>explore the kyx platform</p>
      </button>
      <button className='button-header_2'>
        <p className='border-para_2'>Explore solutions</p>
      </button>
    </div>
  </div>
);

export const HeaderOverlap = () => (
  <div className='overlap-content'>
    <div className='overlap-text'>
      <p className='overlap-text_1'>EARTH ID ACQUIRES</p>
      <p className='overlap-text_2'>Beam Solutions’ AML Platform</p>
      <p className='overlap-text_3'>
        AI-based screening and transaction monitoring AI-based
        <br />
        screening and transaction monitoring.
      </p>
    </div>
    <div className='overlap-btn'>
      <button className='overlap-btn_1'>read the announcement</button>
    </div>
  </div>
);
