import React, { useState, useEffect } from 'react';
import ControleEditora from './controle/ControleEditora';
import ControleLivros from './controle/ControleLivros';

const controleEditora = new ControleEditora();
const controleLivros = new ControleLivros();

function LinhaLivro({ livro, excluir }) {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.título}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivros.obterLivros());
    setCarregado(true);
  }, []);

  const excluir = (codigo) => {
    controleLivros.excluir(codigo);
    setCarregado(false);

    setLivros(livros.filter((livro) => livro.codigo !== codigo));
  };

  return (
    <main>
      <div className="border p-3 mb-3"> {}
        <h1>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Editora</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default LivroLista;
