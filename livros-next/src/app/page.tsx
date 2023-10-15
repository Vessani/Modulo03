import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Head from 'next/head';
import Menu from '../../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Livros</title>
      </Head>
      <Menu />
      <main className="styles.main">
        <h1 className="styles.title">Página Inicial</h1>
        
      </main>
    </div>
  );
};

export default Home;

