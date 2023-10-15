import React, { useState } from "react";
import Menu from "../componentes/Menu";
import Head from "next/head";
import { useRouter } from "next/router";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(livro),
  });
  return response.ok;
};

const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const router = useRouter();

  const tratarCombo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(e.target.value));
  };

  const incluir = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
      editora: "",
    };

    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      router.push("/LivroLista");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Livros</title>
      </Head>
      <Menu />
      <main>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Resumo:</label>
            <textarea
              className="form-control"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Autores (separados por linha):</label>
            <textarea
              className="form-control"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label>Editora:</label>
            <select
              className="form-control"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Incluir
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
