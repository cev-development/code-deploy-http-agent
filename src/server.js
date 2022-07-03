const express = require('express');
const cors = require('cors');
require('dotenv').config()

const { routes } = require('./routes')
const { handlingErrors } = require('./middlewares/errorHandling');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(handlingErrors);

app.listen(port, () => {
    console.log(`Code Deploy HTTP Agente running on port ${port}`)
})
