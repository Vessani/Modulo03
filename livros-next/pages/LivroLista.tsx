import React, { useState, useEffect } from "react";
import Menu from "../componentes/Menu";
import Head from "next/head";
import Livro from "../classes/modelo/Livro";

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const response = await fetch(baseURL);
  const livros = await response.json();

  for (const livro of livros) {
    const editoraResponse = await fetch(
      `http://localhost:3000/api/editoras/${livro.codEditora}`
    );
    const editora = await editoraResponse.json();
    livro.editora = editora.nome; // Definindo a propriedade 'editora' com o nome da editora
  }

  return livros;
};

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
  return response.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    obter().then((data) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <h1>Lista de Livros</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Resumo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.codigo}>
                <td>{livro.codigo}</td>
                <td>{livro.titulo}</td>
                <td>{livro.editora}</td>
                <td>
                  <ul>
                    {livro.autores.map((autor, index) => (
                      <li key={index}>{autor}</li>
                    ))}
                  </ul>
                </td>
                <td>{livro.resumo}</td>
                <td>
                  <button
                    onClick={() => excluir(livro.codigo)}
                    className="btn btn-danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
