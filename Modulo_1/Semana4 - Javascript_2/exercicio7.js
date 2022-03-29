const celcius = [ 0, 32, 45, 50, 75, 80, 99, 120 ];



const fahrenheit = celcius.map((temp) =>{
    const resultado  = Math.round((temp -32) / 1.8)
    return resultado
})

console.log(fahrenheit)