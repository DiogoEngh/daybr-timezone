const { Router } = require('express')
const MethodController = require('./controlers/method.controller');

const routes = Router();

routes.use((req, res, next) => {
    console.log(`[ROUTE: [${req.method}] ${req.url}] - ${new Date().toLocaleString("pt-BR")}`);
    next();
});


routes.get('/', (req, res) => console.log('teste'))
routes.get('/groups', MethodController.listGroups)

module.exports = {routes}