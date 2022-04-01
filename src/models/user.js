import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        initials: {
          //exemplo de método que pode ser realizado para obter resultado de uma consulta                   
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, 
        password_hash: Sequelize.STRING, 
        role: Sequelize.ENUM('admin', 'manager', 'developer'),
        status: Sequelize.ENUM('active', 'archived')
      },
      {
        sequelize, 
        name: {
          singular: 'user',
          plural: 'users'
        }
      }
    );
  }
  static associate(models) {

  }
}