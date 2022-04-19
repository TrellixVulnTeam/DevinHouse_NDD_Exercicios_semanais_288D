import {saudacao} from "./saudacao.mjs";
import saudacaoEspecial from "./saudacao-especial.mjs"
import {Pedido, Produto} from "./Produto.mjs"

console.log(saudacao('rodrigo'))
console.log(saudacaoEspecial('rosa'))

//a const umPedido = new Pedido("123", "Rodrigo",)

// umPedido.adicionarProduto(new Produto("casa"))

// console.log(umPedido)

const caviar = new Produto('Caviar', '1500', 'sim', '1')
const vinhoDubao = new Produto('Vinho Du bao', '6000', 'sim', '1')
const pettiCaO = new Produto('PettiCaOh', '700', 'sim', '1')
const paoComMortadela = new Produto('Pao com Mortadela', '59', 'sim', '1')
const kombuCha = new Produto('konbuCha', '32', 'nao', '1')

// const pedido1 = new Pedido('20220001', 'Jose')
// pedido2.adicionarProduto(paoComMortadela)
// pedido2.adicionarProduto(kombuCha)



const pedido2 = new Pedido('20220001', 'João')
pedido2.adicionarProduto(caviar)
pedido2.adicionarProduto(vinhoDubao)
pedido2.adicionarProduto(pettiCaO)


console.log(pedido2)
pedido2.valorTotal()


const dt = new Date();
let hour = dt.getHours()
let minutes = dt.getMinutes();
let seconds = dt.getSeconds();

setTimeout(()=> console.log(hour + ":" + minutes + ":" + seconds), 3000)



function sleep ( valor ) {
    return new Promise ( (res, rej) => { 
    res (setTimeout(()=>console.log(valor), 3000))
    })
}


sleep("Deu certo")