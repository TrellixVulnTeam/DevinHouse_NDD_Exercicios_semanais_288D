// function soma(...outros) {
// let result = 0;
// outros.forEach((valor) => {
//     result += valor;
// });
// console.log(result);
// }

// soma(10, 1, 2, 3);


const soma = (numero1, ...outros) => {
let result = numero1;
outros.forEach((valor) => {
    result += valor;
});
console.log(result);
};

soma(10, 1, 2, 3);