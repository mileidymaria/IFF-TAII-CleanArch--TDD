"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const RegistroControllerFactory_1 = require("./factory/RegistroControllerFactory");
(async () => {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 8080;
    const registroController = RegistroControllerFactory_1.RegistroControllerFactory.criar();
    app.use(body_parser_1.default.json());
    app.post('/registrar-funcionario', function (req, res) {
        res.send(registroController.registrar(req.body));
    });
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
//# sourceMappingURL=server.js.map