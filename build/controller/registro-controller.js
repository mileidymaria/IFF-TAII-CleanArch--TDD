"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroController = void 0;
const registro_repository_1 = require("../infraestructure/repository/registro-repository");
class RegistroController {
    constructor(registroUseCase) {
        this.registroUseCase = registroUseCase;
        this.repository = new registro_repository_1.RegistroRepository();
    }
    registrar(funcionario) {
        const startTime = new Date().toISOString();
        try {
            this.registroUseCase.validate(funcionario);
            return {
                ...this.repository.registrar(funcionario),
                statusCode: 200,
                message: `Funcionário ${funcionario.nome} registrado com sucesso!`,
                startTime,
                finishTime: new Date().toISOString()
            };
        }
        catch (err) {
            return {
                statusCode: 400,
                message: `Não foi possível registrar funcionário!`,
                error: err,
                startTime,
                finishTime: new Date().toISOString()
            };
        }
    }
}
exports.RegistroController = RegistroController;
//# sourceMappingURL=registro-controller.js.map