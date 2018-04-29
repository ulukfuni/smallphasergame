const path = require('path');
const express = require('express');
const app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', (req, res) => {
    console.log('server listening on port 8080');
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);