const express = require("express");
const app = express();
const PORT = 3000;
const platesData = require('./data/menu.json');
const ordersData = require('./data/orders.json');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT} 🚀`)
});

app.get('/plates', (req, res) => {
  res.json(platesData)
})
