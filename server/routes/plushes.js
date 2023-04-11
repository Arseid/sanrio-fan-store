const express = require('express');
const router = express.Router();
const plushes = require('../data/plushes');

router.get('/', (req, res) => {
    res.json(plushes);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json(plushes.find((p) => p.id === id));
});

router.put('/:id/likes', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let product = plushes.find((p) => p.id === id);
    if (product.isLiked) {
        product.likes--;
    } else {
        product.likes++;
    }
    product.isLiked = !product.isLiked;

    res.json(product);
});

module.exports = router;
