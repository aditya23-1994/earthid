import React from 'react';
import { HeaderHalf } from '../../../components/essentials/header/header-half.component';
import './use-case.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBox } from '../../../components/essentials/overlap-box/overlap-box.component';
import network__43 from '../../../assest/Home/network__43.svg';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';

export const UseCase = () => {
  return (
    <div className='solution-platform'>
      <NavBar />
      <HeaderHalf title='Use Cases' uris='use-cases' />
      <OverlapBox title='Put Earth ID to Work' className='overlap-box'>
        <div className='cards-div'>
          <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <MediumCard
            icon={network__43}
            title='Case Management and Investigation'
            desc='this is a test description to check if the description is actually working or not!'
          />
          <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <MediumCard
            icon={network__43}
            title='General Data Protection Regulation (GDPR)'
            desc='this is a test description to check if the description is actually working or not!'
          />
          <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <MediumCard
            icon={network__43}
            title='General Data Protection Regulation (GDPR)'
            desc='this is a test description to check if the description is actually working or not!'
          />
          <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
        </div>
      </OverlapBox>
      <Footer />
    </div>
  );
};

const MediumCard = ({ icon, desc, title }) => {
  return (
    <div className='medium-card'>
      <img src={icon} className='medium-card-icon' alt='mediumCardIcon' />
      <p className='medium-card-title'>{title}</p>
      <p className='medium-card-desc'>{!desc ? 'right now description is not available' : desc}</p>
      <button className='medium-card-btn'>
        <span className='btn-lable'>Learn More</span>
      </button>
    </div>
  );
};
