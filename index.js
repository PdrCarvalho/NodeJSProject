const express = require('express');
const nunjunks = require('nunjucks');
const app = express();
nunjunks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});
app.use(express.urlencoded({extended:false,}));
const logMiddleware = (req, res, next) => {
    console.log(`HOST: ${req.headers.host} | URL: ${req.url}  | METHOD: ${req.method}`);
    return next();
}
app.set("view engine", "njk");
app.use(logMiddleware);
const  users = ["Pedro","cardoso","carvalho",] 
app.get('/', (req, res) => {
    res.render("list",{users});
});
app.get('/new',(req,res)=>{
    res.render('new');
})
app.post("/create",(req,res)=>{
    users.push(req.body.user);
    res.redirect('/');
})

app.listen(3000);