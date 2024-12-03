const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();

//cors pour autoriser les requêtes de n'importe quel domaine
app.use(cors());

app.get("/data", (req, res) => {

    res.json(data);
});

app.get('/', (req, res) => {
    res.send('API fonctionel');
});

const serveurPort = 3310;
app.listen(serveurPort, () => {
    console.info(`Server is running on port ${serveurPort}`);
});

//http://localhost:3310/