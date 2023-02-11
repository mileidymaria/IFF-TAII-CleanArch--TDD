"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroRepository = void 0;
const uuid_1 = require("uuid");
class RegistroRepository {
    constructor() {
        this.pool = [];
    }
    registrar(funcionario) {
        if (this.pool.find(f => f.email === funcionario.email)) {
            throw 'Funcionário já cadastrado!';
        }
        this.pool.push(funcionario);
        return {
            id: (0, uuid_1.v4)(),
            ...funcionario,
            dataDeRegistro: new Date().toISOString(),
            ultimaAtualizacao: new Date().toISOString()
        };
    }
}
exports.RegistroRepository = RegistroRepository;
//# sourceMappingURL=registro-repository.js.map