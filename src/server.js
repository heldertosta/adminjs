import 'dotenv/config';
import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin', 
    resources: [],
});

const router = AdminJSExpress.buildRouter(adminJS)

//app.use(adminJS.options.rootPath, router);
app.use(adminJS.options.rootPath, router);
app.listen(5000, () => {
    console.log('AdminJS is under localhost')
})


/*
Bom Dia, 
Eu preciso gerar a minha TLF para realizar o pagamento e prosseguir com a renovação do meu alvará de funcionamento.
Meu CNPJ é 36.446.593/0001-61 - Fernando Rodrigues Pessoa LTDA
*/