import express from 'express';
import Photo from '../models/photo.js';

let router = express.Router();

module.exports = (app) => {

    var photo = new Photo();

    router.get('/', photo.findAll);

    router.get('/:id', photo.findById);

    router.post('/', photo.create);

    router.put('/:id', photo.update);

    router.delete('/:id', photo.delete);

    app.use('/photos', router);

};
