const express = require('express');
const cors = require('cors');

const { routes } = require('./routes')
const { handlingErrors } = require('./middlewares/errorHandling');

const app = express();
const port = 3139;

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(handlingErrors);

app.listen(port, () => {
    console.log(`Code Deploy HTTP Agente running on port ${port}`)
})
