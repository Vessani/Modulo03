import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  new Editora(1, 'Martin Claret'),
  new Editora(2, 'Zahar'),
  new Editora(3, 'Nova Fronteira'),
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}

export default ControleEditora;
