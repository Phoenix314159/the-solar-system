const express = require('express'),
    bodyParser = require('body-parser'),
    app = module.exports = express(),
    mainCtrl = require('./mainCtrl'),
    config = require('./config'),
    cors = require('cors'),
    fileArr = require('./fileArray')

let corsOptions = {
    origin: `localhost:${config.port}`
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

fileArr.arr.map(file => {
    app.use(express.static(__dirname + file))
})


// app.use(express.static(__dirname + '/dist'))

app.get('/api/neptuneinfo1', mainCtrl.getNeptune1)
app.get('/api/neptuneinfo2', mainCtrl.getNeptune2)
app.get('/api/uranusinfo1', mainCtrl.getUranus1)
app.get('/api/uranusinfo2', mainCtrl.getUranus2)
app.get('/api/saturninfo1', mainCtrl.getSaturn1)
app.get('/api/saturninfo2', mainCtrl.getSaturn2)
app.get('/api/jupiterinfo1', mainCtrl.getJupiter1)
app.get('/api/jupiterinfo2', mainCtrl.getJupiter2)
app.get('/api/marsinfo1', mainCtrl.getMars1)
app.get('/api/marsinfo2', mainCtrl.getMars2)
app.get('/api/earthinfo1', mainCtrl.getEarth1)
app.get('/api/earthinfo2', mainCtrl.getEarth2)
app.get('/api/venusinfo1', mainCtrl.getVenus1)
app.get('/api/venusinfo2', mainCtrl.getVenus2)
app.get('/api/mercuryinfo1', mainCtrl.getMercury1)
app.get('/api/mercuryinfo2', mainCtrl.getMercury2)
app.get('/api/suninfo', mainCtrl.getSun)


app.listen(config.port, () => {
    console.log('listening on port 3023')
})
