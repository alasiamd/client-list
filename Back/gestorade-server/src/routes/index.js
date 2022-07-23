const { Router } = require('express');
const router = Router();

const { getClientes, postClientes, getClienteById, deleteCliente, putCliente} = require('../controllers/index.controller');

router.get('/clientes', getClientes);
router.get('/clientes/:id', getClienteById);
router.post('/clientes', postClientes);
router.delete('/clientes/:id', deleteCliente);
router.put('/clientes/:id', putCliente)

module.exports = router;