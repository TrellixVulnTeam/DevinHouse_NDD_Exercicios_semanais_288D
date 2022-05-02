// const objeto:{val1:number,val2:number} = {
//     val1:10,
//     val2:30,
// }
// function soma(object:any):number{
//     return object.val1 + object.val2;
// }
// console.log(soma(objeto))
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var eu = new Pessoa;
eu.nome = "Rodrigo";
eu.idade = 32;
eu.cidade = "Florianópolis";
eu.cpf = true;
console.log(eu);
// ////////////////
// class Jogo{
//     nome: string;
//     categoria: string;
//     anoDeLancamento: number;
//     tamanho: number;
// }
// // Não é obrigatório inicializar seus
// // atributos, mesmo sem a declaração "?"
// const game = new Jogo();
// game.nome = "Valorant";
// game.categoria = "FPS";
// game.anoDeLancamento = 2020;
