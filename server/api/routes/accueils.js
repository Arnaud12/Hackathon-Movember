import express from 'express';
import Accueil from '../models/accueil.js';

let router = express.Router();

module.exports = (app) => {

    var accueil = new Accueil();

    router.get('/', accueil.findAll);

    router.get('/:id', accueil.findById);

    router.post('/',  accueil.create);

    router.put('/:id',  accueil.update);

    router.delete('/:id', accueil.delete);

    app.use('/accueils', router);

};
