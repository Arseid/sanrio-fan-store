const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const plushRoutes = require('./routes/plushes');
const orderRoutes = require('./routes/orders');

app.use(express.json());
app.use(cors());

app.use('/plushes', plushRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Sanrio Fan Store listening on port ${port}!`);
});
