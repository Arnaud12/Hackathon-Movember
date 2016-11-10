import mongoose from 'mongoose';

const accueilSchema = new mongoose.Schema({
    vote: Number
});

let model = mongoose.model('accueil', accueilSchema);

export default class accueil {

    findAll(req, res) {
        model.find({}, (err, accueils) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(accueils);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, accueil) => {
            if (err || !accueil) {
                res.sendStatus(403);
            } else {
                res.json(accueil);
            }
        });
    }

    create(req, res) {
        model.create({
                vote: req.body.vote
            },
            (err, accueil) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(accueil);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            vote: req.body.vote
        }, (err, accueil) => {
            if (err || !accueil) {
                res.status(500).send(err.message);
            } else {
                res.json(accueil);
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
