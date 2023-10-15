import { NextApiRequest, NextApiResponse } from 'next'
import ControleEditora from '../../../classes/controle/ControleEditora'

const controleEditora = new ControleEditora()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const codEditora = Number(req.query.codEditora)
      const nomeEditora = await controleEditora.getNomeEditora(codEditora)
      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora })
      } else {
        res.status(404).json({ error: 'Editora não encontrada' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro interno no servidor' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}
