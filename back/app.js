const  http  =  require('http');
const  path  =  require('path');
const  morgan  =  require('morgan');

const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const routes = require('./routes');
const  app  =  express();


app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname  +  '/public'));
app.use('/', routes);



// j'implémente la partie API
app.get("/", (req,res) => {
    res.send("youhou");
})

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
    var  err  =  new  Error('Not Found');
    err.status  =  404;
    next(err);
});


//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});
  