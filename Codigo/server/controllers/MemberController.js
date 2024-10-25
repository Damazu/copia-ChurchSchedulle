// os arquivos que estarao aqui sera apenas para interagir com o BD e processar as requisições HTTP, 
// os arquivos controller fará com que não misture o regras de negocio, rotas, CRUDS e requisicoes em um mesmo arquivo
// igual esta agora, pois nos arquivos routes foram distintos apenas as classes/tabelas, de resto nao foi aplicada nenhuma arquitetura,
// aqui serão chamados os arquivos de services, e os dto serão usados para padronizar a resposta enviada ao cliente.
// um exemplo:

import MemberModel from '../models/MemberModel.js';

export default {
  async getAllMembers(req, res) {
    try {
      const members = await MemberModel.findAll();
      res.json(members);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving members' });
    }
  }
};