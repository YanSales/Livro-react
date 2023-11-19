// LivroDados.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const navigate = useNavigate();

  // Certifique-se de que o método getEditoras existe em ControleEditora
  const opcoes = ControleEditora.getEditoras ? ControleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  })) : [];

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : null);

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const novoLivro = {
      codigo: 0, // ou lógica para obter o próximo código disponível
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main className="container mt-4">
      <h1>Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (separados por linha):</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="codEditora">Editora:</label>
          <select
            className="form-control"
            id="codEditora"
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
          Incluir Livro
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
