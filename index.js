const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/', (req, res) => res.json({ status: 'App is running correctly', version: '2.0' }));
app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== Number(req.params.id));
  res.json({ message: 'deleted' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
