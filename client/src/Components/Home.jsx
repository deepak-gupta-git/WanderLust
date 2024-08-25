import React from 'react';
import Listings from './Listings';

const Home = ({ listings }) => {
  return (
    <>
      <Listings listings={listings} />
    </>
  );
};

export default Home;
