const express = require("express");
const router = express.Router();
//const path = require('path');
//const upload = require("../middlewares/multerParaProductos");
const controladorPrincipal = require("../../controllers/api/apiProductController");

router.get("/",controladorPrincipal.productos)
router.get("/detalle/:id",controladorPrincipal.detalleProducto);
//router.get('/carrito',controladorPrincipal.carro);
//router.get('/crear',controladorPrincipal.crearProducto);
//router.post('/crear', upload.single("productImage"), controladorPrincipal.create);
//router.get('/:id/editar',controladorPrincipal.edit);
//router.put('/:id', upload.single("productImage"), controladorPrincipal.update)
//router.delete('/:id',controladorPrincipal.destroy)
module.exports = router; 