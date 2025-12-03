import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage'; 
import ContactPage from './pages/ContactPage';     

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppNavbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}
export default App;