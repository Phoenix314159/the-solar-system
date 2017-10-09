const express = require('express'),
    app = module.exports = express(),
    config = require('./config/config'),
    path = require('path');

require('./middleware/middleware')(app);
require('./routes/routes')(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});
