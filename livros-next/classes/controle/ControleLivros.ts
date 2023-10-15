import Livro from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'A Ilha do Tesouro', 'O livro conta a história de Jim Hawkins, um jovem que se vê envolvido em uma emocionante busca por um tesouro escondido.',
    ['Robert Louis Stevenson']),
  new Livro(2, 2, 'As Minas de Salomão', 'A história segue o aventureiro Allan Quatermain em uma expedição ao coração da África em busca das lendárias Minas de Salomão.',
    ['H. Rider Haggard']),
    new Livro(3, 3, 'A Ilha Misteriosa', 'A história narra as aventuras de um grupo de náufragos em uma ilha misteriosa.',
    ['Jules Verne']),
];



class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
