const express = require('express');
const app = express();
const http = require('http').Server(app);
const config = require('./server/config/config');

app.use(express.static(__dirname + '/app'));

require('./server/routes')(app);

http.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
