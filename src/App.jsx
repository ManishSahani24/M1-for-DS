import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InstructorPage from './pages/InstructorPage';
import TAPage from './pages/TAPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<InstructorPage />} />
          <Route path="/ta" element={<TAPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
