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
    try {
        //verifie que ingredients est bien défini
        if (ingredients) {
            res.json(ingredients);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error); // Transmet l'erreur au middleware global
    }
});

//pain
app.get("/pains", (req, res) => {
    try {
        //verifie que pains est bien défini
        if (pains) {
            res.json(pains);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error); // Transmet l'erreur au middleware global
    }
});

//remedies
app.get("/remedies", (req, res) => {
    try {
        //verifie que remedies est bien défini
        if (remedies) {
            res.json(remedies);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error); // Transmet l'erreur au middleware global
    }
});

//page d'accueil
app.get('/', (req, res) => {
    const message = (`
<p>API fonctionel !</p>
<p>http://localhost:3310</p>
<p><a href="/ingredients">http://localhost:3310/ingredients</a></p>
<p><a href="/pains">http://localhost:3310/pains</a></p>
<p><a href="/remedies">http://localhost:3310/remedies</a></p>
    `);

    res.send(message);
});

//les page 404
// Middleware pour les pages inexistantes (404)
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page non trouvée</h1>
        <p>Désolé, la page que vous cherchez n'existe pas.</p>
        <p><a href="/">Retour à l'accueil</a></p>
    `);
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log l'erreur pour le débogage

    // Renvoyer une réponse générique pour les erreurs internes
    res.status(500).json({
        error: 'Erreur interne du serveur',
        message: 'Une erreur est survenue'
    });
});

const serveurPort = 3310;
app.listen(serveurPort, () => {
    console.info(`Server is running on port ${serveurPort}`);
});