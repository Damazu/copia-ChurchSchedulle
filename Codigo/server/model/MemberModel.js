// nesses arquivos model da pasta model será mais utilizado
// ele foi utilizado apenas por uma classe/tabela mas ele deve-se ter mais arquivos do mesmo para que
// centralize os metodos CRUD das classes, e nao misture com os metodos de regra de negocio,
// tendo um melhor controle, facilidade de encontrar e centralização de metodos que são mais utilizados do que metodos que são regras de negocio
// exemplo:

import dbConfig from '../config/dbConfig.js';

class MemberModel {
  static async findAll() {
    return dbConfig.query('SELECT * FROM members');
  }
}

export default MemberModel;