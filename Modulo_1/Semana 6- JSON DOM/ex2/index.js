function calcular(){
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);

let operador = document.getElementById('operacao').value;

let resultado = "";

switch (operador) {
    case '+':
        resultado = n1 + n2;
        break;

    case '-':
        resultado = n1 - n2;
        break;

    case '*':
       resultado = n1 * n2;
        break;
    case '/':
        resultado = n1 / n2;
        break;
}

    document.getElementById('result').textContent = resultado;
};
