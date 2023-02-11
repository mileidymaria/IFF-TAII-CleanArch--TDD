import { RegistroController } from "../controller/registro-controller";
import { RegistroUseCase } from "../use-case/registro-use-case";

export class RegistroControllerFactory {
    static criar(){
        return new RegistroController(new RegistroUseCase());
    }
}