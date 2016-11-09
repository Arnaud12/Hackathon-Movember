import express from 'express';
import Auth from '../middlewares/authorization.js';
import Photo from '../models/photo.js';

let router = express.Router();

module.exports = (app) => {

    var photo = new Photo();

    router.get('/', photo.findAll);

    router.get('/:id', photo.findById);

    router.post('/', Auth.hasAuthorization, photo.create);

    router.put('/:id', Auth.hasAuthorization, photo.update);

    router.delete('/:id', Auth.hasAuthorization, photo.delete);

    app.use('/photos', router);

};
