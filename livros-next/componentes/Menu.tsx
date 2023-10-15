import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <p className="nav-link text-white">Página Inicial</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroLista">
              <p className="nav-link text-white">Lista de Livros</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/LivroDados">
              <p className="nav-link text-white">Dados do Livro</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
