const express = require('express');
const app = express();
const port = 5000;

app.get('/', (_, res) => {
    res.send('Basic express example');
});

app.get('/healthcheck', (_, res) => {
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log(`Basic express app listening on port ${port}`);
});
