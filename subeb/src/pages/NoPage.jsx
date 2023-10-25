import React from 'react';

import noPage from "../assets/images/404.webp";

const NoPage = () => {
  return (
    <div className='nopage'>
      <h1>404</h1>
      <p>Page not found</p>
      <img src={noPage} alt="404" />
    </div>
  )
}

export default NoPage