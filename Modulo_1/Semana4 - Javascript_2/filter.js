const usuarios = [
{
    nome: 'Thais',
    idade: 27,
},
{
    nome: 'Teste',
    idade: 16,
},
];

console.log(usuarios)

const maior = usuarios.find((usuario) => {
return usuario.idade <= 18;

});

const newObject = {...maior};


console.log(maior);