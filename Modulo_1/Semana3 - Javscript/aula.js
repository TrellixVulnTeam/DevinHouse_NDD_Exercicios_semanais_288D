alert("Bem vindo ao jogo: Botão da sorte");

var dt = new Date();
var horas = String(dt.getHours()).padStart(2, '0');
var minutos = String(dt.getMinutes()).padStart(2, '0');

alert('Agora são: ' + horas + ":" + minutos);

function question1(){
    confirm("Esta pronto?!")
    prompt("Digite o número secreto e aperte OK")
    alert("Hoje não é seu dia de sorte. \nTente da proxima vez.")
};


var resultadoCadastro = {
};

var idadeAtual = {
};

function cadastro(){
    resultadoCadastro.surname = prompt("Qual seu sobrenome?");
    resultadoCadastro.name = prompt("Qual seu nome?");
    resultadoCadastro.belive = confirm("Você acredita em sorte?!");
    qntLetras = resultadoCadastro.surname;
    alert("Nome: " + resultadoCadastro.name.toUpperCase() + "\nSobrenome: " +  resultadoCadastro.surname + "\nSeu sobre nome tem : " + qntLetras.length + " letras");
    
    idadeAtual.nascimento = prompt("Em que ano você nasceu?");
    idadeAtual.hoje = prompt("Em que ano estamos?");
    idadeAtual.difenrenca =  idadeAtual.hoje - idadeAtual.nascimento;
    idadeAtual.MenosUm = idadeAtual.difenrenca - 1;

    alert("Sua idade é " + idadeAtual.MenosUm + " ou " + idadeAtual.difenrenca + " , onde " + idadeAtual.difenrenca + " é sua idade caso já tenha feito aniversário neste ano, e " + idadeAtual.MenosUm + " é sua idade caso não tenha aniversariado no ano corrente.");

    console.log(resultadoCadastro);

}

var resultadoCalculo ={

}

function calculo(){
    resultadoCalculo.operador = prompt("Qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”) ?")
    resultadoCalculo.num1 = prompt("Digite o primeiro valor")
    resultadoCalculo.num2 = prompt("Digite o segundo valor")

    if(resultadoCalculo.operador == "+"){
        resultadoCalculo.final = parseInt(resultadoCalculo.num1) + parseInt(resultadoCalculo.num2)
        alert("O resultado do seu cálculo é:" + resultadoCalculo.final)
    }else if(resultadoCalculo.operador == "-") {
        resultadoCalculo.final = parseInt(resultadoCalculo.num1) - parseInt(resultadoCalculo.num2)
        alert("O resultado do seu cálculo é:" + resultadoCalculo.final)
    }else if(resultadoCalculo.operador == "*") {
        resultadoCalculo.final = parseInt(resultadoCalculo.num1) * parseInt(resultadoCalculo.num2)
        alert("O resultado do seu cálculo é:" + resultadoCalculo.final);
    }else if(resultadoCalculo.operador == "/") {
        resultadoCalculo.final = parseInt(resultadoCalculo.num1) / parseInt(resultadoCalculo.num2);
        alert("O resultado do seu cálculo é:" + resultadoCalculo.final)
    };
};

var progA ={

}

function pa(){
    progA.num1 = parseInt(prompt('Digite o valor inicial: '))
    progA.num2 = parseInt(prompt('Digite da raiz: '))
    progA.resultado = []

    for(i=1 ; i<10 ; i++){
        progA.resultado.push(progA.num1)
        progA.num1 += progA.num2
    }
    alert("P.A. : \n" + progA.resultado.join(" / "))
}




