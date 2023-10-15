import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros'

const controleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livros = controleLivros.obterLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  } else if (req.method === 'POST') {
    try {
      const livro = req.body;
      controleLivros.incluir(livro);
      res.status(200).json({ message: 'Livro incluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};
