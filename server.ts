import express from 'express';
import bodyParser from 'body-parser';
import {RegistroControllerFactory} from './factory/RegistroControllerFactory';

(async () => {
    const app = express();
    const port = process.env.PORT || 8080; // default port to listen
    const registroController = RegistroControllerFactory.criar()
    
    app.use(bodyParser.json());

    app.post('/registrar-funcionario', function (req, res) {
        res.send(registroController.registrar(req.body));
    });

    app.listen( port, () => {
        console.log( `server running http://localhost:${ port }` );
        console.log( `press CTRL+C to stop server` );
    });
})();