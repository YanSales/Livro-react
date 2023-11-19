// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Livros React</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Lista de Livros</Link>
            </li>
            <li className="nav-item">
              <Link to="/dados" className="nav-link">Dados do Livro</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
};

export default App;
