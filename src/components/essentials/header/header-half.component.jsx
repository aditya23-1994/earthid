import React from 'react';
import propTypes from 'prop-types';
import './header-half.styles.scss';

export const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main'>
      <p className='headerHalf-title'>{title}</p>
      <p className='headerHalf-uris'>
        Solutions / <span className='uris-class'>{uris}</span>
      </p>
    </div>
  );
};

HeaderHalf.propTypes = {
  title: propTypes.string,
  uris: propTypes.string,
};
