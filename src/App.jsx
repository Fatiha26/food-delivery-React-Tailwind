import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrepareList from './components/PrepareList';
import Cities from './components/Cities';
import Download from './components/Download';
import Office from './components/Office';
import Text from './components/Text';
import Country from './components/Country';
import Footer from './components/Footer';
import CityPage from './components/CityPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <PrepareList />
            <Cities />
            <Download />
            <Office />
            <Text />
            <Country />
          </>
        } />
        <Route path="/city/:cityName" element={<CityPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
