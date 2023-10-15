import { NextApiRequest, NextApiResponse } from 'next'
import ControleEditora from '../../../classes/controle/ControleEditora'

const controleEditora = new ControleEditora()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const editoras = await controleEditora.getEditoras()
      res.status(200).json(editoras)
    } catch (error) {
      res.status(500).json({ error: 'Erro interno no servidor' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}
