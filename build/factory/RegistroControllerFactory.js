"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroControllerFactory = void 0;
const registro_controller_1 = require("../controller/registro-controller");
const registro_use_case_1 = require("../use-case/registro-use-case");
class RegistroControllerFactory {
    static criar() {
        return new registro_controller_1.RegistroController(new registro_use_case_1.RegistroUseCase());
    }
}
exports.RegistroControllerFactory = RegistroControllerFactory;
//# sourceMappingURL=RegistroControllerFactory.js.map