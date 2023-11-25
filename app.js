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
});

app.post('/plates', (req, res) => {
  const newPlate = req.body;

  res.json({ message: "Plate created", data: newPlate });
});

app.put('/plates/:id', (req, res) => {
  const plateById = req.params.id;
  const updatedData = req.body;

  res.json({ message: "Plate updated", data: updatedData })
});

app.delete('/plates/:id', (req, res) => {
  const plateById = req.params.id;

  res.json({ message: "Plate removed", data: { id: plateById } })
});

app.get('/orders', (req, res) => {
  res.json(ordersData);
});

app.post('/orders/create', (req, res) => {
  const newOrder = req.body;

  res.json({ message: "Order created", data: newOrder });
});