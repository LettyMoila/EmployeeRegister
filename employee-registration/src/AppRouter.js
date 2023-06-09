import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AddFunc from './pages/AddFunc.js';
import SearchFunc from './pages/SearchFunc.js';
import UpdateFunc from './pages/UpdateFunc.js';
import DeleteFunc from './pages/DeleteFunc.js';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/AddFunc" element={<AddFunc />} />
        <Route path="/SearchFunc" element={<SearchFunc />} />
        <Route path="/UpdateFunc" element={<UpdateFunc />} />
        <Route path="/DeleteFunc" element={<DeleteFunc />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
