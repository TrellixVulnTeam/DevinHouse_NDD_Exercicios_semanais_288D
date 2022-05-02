import {Pessoa} from "./exercicio08"


class Aluno implements Pessoa{
    nome: string;
    idade: number;
    rua: string;

    matricula:number;
    cadeiras:string[];

    cadastrar() {
        console.log('Nome: ',this.nome,'|Idade: ',this.idade,'|Rua: ',this.rua,'|Matrucula: ',this.matricula,'|Cadeiras: ',this.cadeiras)
    }

    // constructor(matricula:number, cadeiras:string){
    //     super(nome:string,idade:number,rua:string)
    // }
}

class Funcionario implements Pessoa{
    nome: string;
    idade: number;
    rua: string;

    identificado:number;
    setor:string;



    cadastrar() {
        console.log('Nome: ',this.nome,'|Idade: ',this.idade,'|Rua: ',this.rua,'|Identificador: ',this.identificado,'|Setor: ',this.setor)
    }
    
}

// let rodrigo = new Funcionario("Rodrigo", 32, "Avenida A", 1234, "TI")


let rodrigo = new Funcionario()
rodrigo.nome = "Rodrigo";
rodrigo.idade = 42;
rodrigo.rua = "Rua A"
rodrigo.identificado = 1234;
rodrigo.setor = "TI"
rodrigo.cadastrar()
// console.log(rodrigo)

console.log("--------------------------")

let luiz = new Aluno()
luiz.nome = "Luiz";
luiz.idade = 42;
luiz.rua = "Rua A"
luiz.matricula = 54321;
luiz.cadeiras = ["TI", "JavaScript", "Html", "Css"]
luiz.cadastrar()