import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Мониторинг</a>
          <nav className="navbar-nav">
            <a className="nav-link" href="/">Панель</a>
            <a className="nav-link" href="/reports">Отчеты</a>
          </nav>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
