// LivroLista.js
import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(ControleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    // Adicione um delay de 1 segundo (1000 milissegundos) antes de excluir o livro
    setTimeout(() => {
      ControleLivro.excluir(codigo);
      setCarregado(false);
    }, 1000);
  };

  return (
    <main className="container mt-4">
      <h1 className="mb-4">Listagem de Livros</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
