
function operacao(num1,num2,operador){
    resultado = 0;
    switch(operador){
        case "+":
            resultado = (num1 + num2);
            console.log(resultado);
        break
        case "-" :
            resultado = (num1 - num2);
            console.log(resultado);
        break
        case "*" :
            resultado = (num1 * num2);
            console.log(resultado);
        break
        case "/":
            resultado = (num1 / num2);
            console.log(resultado);
        break
        default :
            console.log("Operador Indisponível")
    
    }   

}

operacao(2,6, "+")
operacao(2,6, "*")
operacao(2,6, "-")
operacao(2,6, "/")
operacao(2,6, "$")

