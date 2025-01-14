import React from 'react';
import Listings from './Listings';
import Filters from './Filters';

const Home = (
  // { listings }
) => {
  return (
    <>
      <Filters/>
      {/* <Listings listings={listings}/> */}
      <Listings/>
    </>
  );
};

export default Home;
