import express from 'express';
import Accueil from '../models/accueil.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var accueil = new Accueil();

    router.get('/', accueil.findAll);

    router.get('/:id', accueil.findById);

    router.post('/', Auth.hasAuthorization, accueil.create);

    router.put('/:id', Auth.hasAuthorization, accueil.update);

    router.delete('/:id', Auth.hasAuthorization, accueil.delete);

    app.use('/accueils', router);

};
