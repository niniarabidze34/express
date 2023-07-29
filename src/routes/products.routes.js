const productsController = require('../controller/products.contoller');

const router = require('express').Router();

router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getProductsById);
router.post('/', productsController.addProducts);
router.patch('/:productId', productsController.updateProducts);
router.delete('/:productId', productsController.deleteProducts );

module.exports = router;