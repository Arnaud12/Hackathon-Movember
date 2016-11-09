import mongoose from 'mongoose';

const photosSchema = new mongoose.Schema({
    stachePhoto: String,
    pseudoPhoto: String,
    lieuPhoto: String,
    commentPhoto: String,

});

let model = mongoose.model('Photo', photosSchema);

export default class Photo {

    findAll(req, res) {
        model.find({}, (err, photos) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(photos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, photo) => {
            if (err || !photo) {
                res.sendStatus(403);
            } else {
                res.json(photo);
            }
        });
    }

    create(req, res) {
        model.create({
                stachePhoto: req.body.stachePhoto,
                photoPhoto: req.body.pseudoPhoto,
                lieuPhoto: req.body.lieuPhoto,
                commentPhoto: req.body.commentPhoto
            },
            (err, photo) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(photo);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            stachePhoto: req.body.stachePhoto,
            pseudoPhoto: req.body.pseudoPhoto,
            lieuPhoto: req.body.lieuPhoto,
            commentPhoto: req.body.commentPhoto
        }, (err, photo) => {
            if (err || !photo) {
                res.status(500).send(err.message);
            } else {
                res.json(photo);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
