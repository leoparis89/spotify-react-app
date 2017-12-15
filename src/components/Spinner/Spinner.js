import React from 'react';

export const Spiner = () => (
  <div>
    <i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' style={{margin: '20px'}}></i>
    <span className='sr-only'>Loading...</span>
  </div>
);
