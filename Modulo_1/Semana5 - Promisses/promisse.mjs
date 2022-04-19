const minhaPromise = new Promise((resolve, reject) => {
const deuCerto = false;
if (deuCerto) {
    setTimeout(() => resolve([{ nome: 'teste' }]), 1000);
} else {
    setTimeout(() => reject('Deu Errado!'), 1000);
}
});

minhaPromise.then((test) => console.log(test)).catch((error) => console.error('Error: ', error));