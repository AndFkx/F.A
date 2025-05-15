const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/mensaje', (req, res) => {
  const mensaje = req.body.mensaje;
  const respuesta = `¡Hola! Veo que estás sintiéndote: "${mensaje}". Recuerda que todo mejora con el tiempo.`;
  res.json({ respuesta });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
