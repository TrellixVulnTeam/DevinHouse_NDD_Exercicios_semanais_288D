const celcius = [ 0, 32, 45, 50, 75, 80, 99, 120 ];



const fahrenheit = celcius.map((temp) =>{
    const resultado  = Math.round((temp -32) / 1.8)
    return resultado
})

console.log(fahrenheit)



// const novosNomes = usuarios.map((usuario) => {
//     const ano = new Date().getFullYear()
//     const nickname = `${usuario.nome}_${usuario.sobrenome}_${ano}`
    
//     return {...usuario, nickname}
// }
// )

// console.log(novosNomes)