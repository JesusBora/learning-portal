import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.scss'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
