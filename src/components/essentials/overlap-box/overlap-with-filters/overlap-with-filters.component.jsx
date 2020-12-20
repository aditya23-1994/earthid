import React from 'react';
import './overlap-with-filters.styles.scss';
import { Pagination } from '@material-ui/lab';

export const OverlapWithFilter = props => {
  console.log(props);
  return (
    <div className='overlap-box-with-filters'>
      <div className='filter-pagination'>
        <p></p>
        <Pagination count={10} variant='outlined' shape='rounded' size='small' />
      </div>
      {props.children}
    </div>
  );
};
