import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Catalogo de livros</Link>
            </li>
            <li className="nav-item">
              <Link to="/dados" className="nav-link">Cadastro de livros</Link>
            </li>
          </ul>
        </nav>
        <Routes> {}
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
