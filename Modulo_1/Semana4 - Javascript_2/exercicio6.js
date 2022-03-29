impares = 0;
contador = 0; 


// while(impares < 10){
//     if(contador % 2 !== 0){ 
//         contador++;
//     }else{
//         impares ++;
//         contador ++;
//     }
//     console.log("Contador:", contador, "/", "Impares:", impares);
// }



while (impares < 10) {
    console.log("Valor do contador: " + contador);
    contador++;
    if (impares % 2 !== 0) {
        console.log("Valor do ímpar: " + impares);
    }
    impares++;
}