import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './pages/Home';
import AuthGuard from './AuthGuard';
import './App.css';
import Waiting from './pages/Waiting';
import Login from './pages/Login';

function App() {

  return (
    <div className='app-bg'>
      <Router>
        <Routes>
          <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
          <Route path="/waiting-room" element={<AuthGuard><Waiting /></AuthGuard>} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/new-split" element={<AuthGuard><NewSplit /></AuthGuard>} />
          <Route path="/view-history" element={<AuthGuard><ViewHistory /></AuthGuard>} />
          <Route path="/summary" element={<AuthGuard><Summary /></AuthGuard>} />
          <Route path="/chat" element={<AuthGuard><ChatComponent /></AuthGuard>} />
          <Route path="/unpublished" element={<AuthGuard><PublishSplits /></AuthGuard>} /> */}
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
