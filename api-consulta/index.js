const express = require('express');
const cors = require('cors');
const conexion = require('./db'); 
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
