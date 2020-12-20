import React from 'react';
import faceScanNet from '../../../assest/Home/faceScanNet.png';
import faceScanBrain from '../../../assest/Home/faceScanBrain.png';
import faceScanDesk from '../../../assest/Home/faceScandesk.png';
import faceScanCross from '../../../assest/Home/faceScanCross.png';
import './face-scan-two.styles.scss';

export const FaceScanTwo = () => (
  <div className='faceScan-content'>
    <p className='faceScan-content_title'>Award-Winning Identity Verification Technology</p>
    <p className='faceScan-content_desc'>
      With Earth ID’s industry-leading technologies, you’ll turn good people into good customers
      faster than ever and rest assured your customers are who they claim to be.
    </p>
    <p className='faceScan-content_feat'>Featuring</p>
    <div className='faceScan-content-img'>
      <img src={faceScanNet} alt='icons_face-content' className='icon-face-content' />
      <img src={faceScanBrain} alt='icons_face-content' className='icon-face-content' />
      <img src={faceScanDesk} alt='icons_face-content' className='icon-face-content' />
      <img src={faceScanCross} alt='icons_face-content' className='icon-face-content' />
    </div>
    <button className='faceScan-content-btn'>Explore Earth ID&apos;s Technology</button>
  </div>
);
