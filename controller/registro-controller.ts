import { RegistroRepository } from "../infraestructure/repository/registro-repository";
import { RegistroUseCase } from "../use-case/registro-use-case";
import { Funcionario } from "../common/types/funcionario";

export class RegistroController{

    private repository: RegistroRepository;

    constructor(private registroUseCase: RegistroUseCase){
        this.repository = new RegistroRepository();
    }

    registrar(funcionario: Funcionario) : { [key: string]: any }{
        const startTime = new Date().toISOString();
        try {
        this.registroUseCase.validate(funcionario);
        return {
            ...this.repository.registrar(funcionario),
            statusCode: 200,
            message: `Funcionário ${funcionario.nome} registrado com sucesso!`,
            startTime, 
            finishTime: new Date().toISOString()
        }
        } catch (err){
            return {
                statusCode: 400,
                message: `Não foi possível registrar funcionário!`,
                error: err,
                startTime, 
                finishTime: new Date().toISOString()
            }
        }
    }
}