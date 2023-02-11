"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegistroControllerFactory_1 = require("../factory/RegistroControllerFactory");
const validMock = {
    nome: "mileidy",
    email: "mileidy@gmail.com"
};
const validOutputResponse = {
    "nome": "mileidy",
    email: "mileidy@gmail.com",
    statusCode: 200,
    message: "Funcionário mileidy registrado com sucesso!"
};
describe('Registro Controller Tests', () => {
    test('Giving a valid payload, should create employee', () => {
        const sut = RegistroControllerFactory_1.RegistroControllerFactory.criar();
        const response = sut.registrar(validMock);
        for (const [key, value] of Object.entries(validOutputResponse)) {
            expect(value).toBe(response[key]);
        }
    });
});
//# sourceMappingURL=registro-controller.spec.js.map