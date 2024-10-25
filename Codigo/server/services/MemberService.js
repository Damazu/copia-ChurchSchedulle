// aqui sera utilizado para realizar as regras de negocio e chamar os CRUDs do model
// aqui vai receber as solicitações dos controllers e usar os arquivos dto para garantir que vai ser enviado na mascara/formato correto
// e nao deixar misturado nos routes
// um exemplo:
import UserModel from '../models/UserModel.js';

const UserService = {
  async getUserById(id) {
    return await UserModel.findById(id);
  }
};

export default UserService;