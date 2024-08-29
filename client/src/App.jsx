import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import sampleListings from './data/data';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NewListings from './Pages/NewListings';
import Listings from './Components/Listings';
import ListingDetails from './Pages/ListingDetails';
import Error from './Pages/Error';
import EditListings from './Pages/EditListings';
import { AuthProvider } from './Store/authStore';
import { Logout } from './Pages/Logout';

const App = () => {
  const [listings, setListings] = useState(Array.isArray(sampleListings) ? sampleListings : []);

  const addNewListing = (newListing) => {
    setListings([...listings, newListing]);
  };


  return (
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/newListings' element={<NewListings addNewListing={addNewListing} />} />
        <Route path='/listings' element={<Listings listings={listings} />} />
        <Route path='/listingDetails' element={<ListingDetails />} />
        <Route path='*' element={<Error />} />
        <Route path='/editListing' element={<EditListings />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
