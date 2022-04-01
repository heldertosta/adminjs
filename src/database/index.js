import { isModuleDeclaration } from "babel-types";
import Sequelize from "sequelize";

import config from '../config/database';

//import Model from '../models/xxx';

const models = [];

class Database {
  constructor(){
    this.connection = new Sequelize(config);
    this.init();
  }

  init(){
    models.forEach((model) => model.init(this.connection));
  }
  
  associate(){
    models.forEach((model) => {
      if(model.associate){
        model.associate(this.connection.models);
      }
    })
  }
}

export default new Database();