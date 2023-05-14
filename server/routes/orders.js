const express = require('express');
const router = express.Router();
const orders = require('../data/orders');

router.get('/', (req, res) => {
    res.json(orders);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const order = orders.find(o => o.id === id);
    res.json(order);
});

router.post('/', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.json(newOrder);
});

module.exports = router;
