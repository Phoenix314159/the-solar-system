const app = require('./server'),
    massive = require('massive'),
    config = require('./config'),
    connString = config.MASSIVE_URI,
    massiveInstance = massive.connectSync({connectionString: connString});

app.set('db', massiveInstance);
const db = app.get('db');

module.exports = {
    getNeptune1: (req, res) => {
        db.get_neptune_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getNeptune2: (req, res) => {
        db.get_neptune_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getUranus1: (req, res) => {
        db.get_uranus_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        });
    },
    getUranus2: (req, res) => {
        db.get_uranus_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        });
    },
    getSaturn1: (req, res) => {
        db.saturn_text_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getSaturn2: (req, res) => {
        db.saturn_text2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getJupiter1: (req, res) => {
        db.jupiter_text_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getJupiter2: (req, res) => {
        db.jupiter_text_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getMars1: (req, res) => {
        db.mars_text_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getMars2: (req, res) => {
        db.mars_text_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getEarth1: (req, res) => {
        db.earth_text_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getEarth2: (req, res) => {
        db.earth_text_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getVenus1: (req, res) => {
        db.venus_text_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getVenus2: (req, res) => {
        db.venus_text_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getMercury1: (req, res) => {
        db.mercury_text_1((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getMercury2: (req, res) => {
        db.mercury_text_2((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    },
    getSun: (req, res) => {
        db.sun_text((err, text) => {
            !err ? res.status(200).send(text) : res.status(404).send(err);
        })
    }
}