"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    Aluno.prototype.cadastrar = function () {
        console.log('Nome: ', this.nome, '|Idade: ', this.idade, '|Rua: ', this.rua, '|Matrucula: ', this.matricula, '|Cadeiras: ', this.cadeiras);
    };
    return Aluno;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.cadastrar = function () {
        console.log('Nome: ', this.nome, '|Idade: ', this.idade, '|Rua: ', this.rua, '|Identificador: ', this.identificado, '|Setor: ', this.setor);
    };
    return Funcionario;
}());
// let rodrigo = new Funcionario("Rodrigo", 32, "Avenida A", 1234, "TI")
var rodrigo = new Funcionario();
rodrigo.nome = "Rodrigo";
rodrigo.idade = 42;
rodrigo.rua = "Rua A";
rodrigo.identificado = 1234;
rodrigo.setor = "TI";
rodrigo.cadastrar();
// console.log(rodrigo)
console.log("--------------------------");
var luiz = new Aluno();
luiz.nome = "Luiz";
luiz.idade = 42;
luiz.rua = "Rua A";
luiz.matricula = 54321;
luiz.cadeiras = ["TI", "JavaScript", "Html", "Css"];
luiz.cadastrar();
