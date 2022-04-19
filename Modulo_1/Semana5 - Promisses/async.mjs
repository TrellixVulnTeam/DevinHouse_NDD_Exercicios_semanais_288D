async function dobraValor(value) {
console.log(value);
return value * 2;
}

dobraValor(2)
.then((result) => dobraValor(result))
.then(dobraValor)
.then(console.log);


const chamar = async () => {
    let result = await dobraValor(2);
    result = await dobraValor(result);
    result = await dobraValor(result);
    console.log('resultado final', result);
};

chamar();