const express = require('express');
const cors = require('cors');
//importer les données
const ingredients = require('./data/ingredients.json');
const pains = require('./data/pains.json');
const remedies = require('./data/remedies.json');

const app = express();

//cors pour autoriser les requêtes de n'importe quel domaine
app.use(cors());

//ingredients
app.get("/ingredients", (req, res) => {
    res.json(ingredients);
});

//pain
app.get("/pains", (req, res) => {
    res.json(pains);
});

//remedies
app.get("/remedies", (req, res) => {
    res.json(remedies);
});

app.get('/', (req, res) => {
    res.send('API fonctionel');
});

const serveurPort = 3310;
app.listen(serveurPort, () => {
    console.info(`Server is running on port ${serveurPort}`);
});

//http://localhost:3310/