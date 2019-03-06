const express = require('express');

const app = express();

const port = 3050;


app.get('/', (req, res)=> {
        res.send('<b>Hello, world!!!</b>');
});

app.get('/:string', (req, res)=> {
    res.send(req.params.string);
});

app.listen(port, () => {
    console.log('Were live on http:localhost:' + port)
});