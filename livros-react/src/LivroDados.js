import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleEditora from './controle/ControleEditora';
import ControleLivros from './controle/ControleLivros';

const controleEditora = new ControleEditora();
const controleLivros = new ControleLivros();

function LivroDados() {
    const opcoes = controleEditora.getEditoras().map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
  
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
  
    const navigate = useNavigate();
  
    const tratarCombo = (event) => {
      setCodEditora(Number(event.target.value));
    };
  
    const incluir = (event) => {
      event.preventDefault();
      const autoresArray = autores.split('\n').map((autor) => autor.trim());
      const novoLivro = {
        codigo: 0,
        codEditora,
        título: titulo,
        resumo: resumo,
        autores: autoresArray,
      };
      controleLivros.incluir(novoLivro);
      navigate('/');
    };
  
    return (
      <main className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center">Cadastro de Livro</h1>
            <form onSubmit={incluir}>
              <div className="form-group">
                <label>Título:</label>
                <input
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Resumo:</label>
                <textarea
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Autores (um por linha):</label>
                <textarea
                  value={autores}
                  onChange={(e) => setAutores(e.target.value)}
                  className="form-control"
                  rows="4"
                />
              </div>
              <div className="form-group mb-4">
                <label>Editora:</label>
                <select
                  value={codEditora}
                  onChange={tratarCombo}
                  className="form-control"
                >
                  {opcoes.map((opcao) => (
                    <option key={opcao.value} value={opcao.value}>
                      {opcao.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Incluir Livro
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
}
  
export default LivroDados;
  

