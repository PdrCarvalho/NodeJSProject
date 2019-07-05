const express = require('express');

const app = express();

const logMiddleware = (req,res,next)=>{
    console.log(`HOST: ${req.headers.host} | URL: ${req.url}  | METHOD: ${req.method}` );
    return next();
}

app.use(logMiddleware);
app.get('/', (req, res) => {
    res.send(`Bem-vindo ${req.query.name}`)
});
app.get('/second/:name', (req, res) => {
    res.json({mensagem:`Bem-vindo ${req.params.name}!`});
});
app.listen(3000);