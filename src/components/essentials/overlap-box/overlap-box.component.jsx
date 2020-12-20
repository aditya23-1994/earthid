import React from 'react';
import './overlap-box.styles.scss';

export const OverlapBox = props => {
  console.log(props);
  return (
    <div className='overlap-box'>
      <p className='box-title'>{props.title}</p>
      {props.children}
    </div>
  );
};
