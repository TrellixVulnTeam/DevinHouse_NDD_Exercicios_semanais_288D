class Veiculo {
tipo;
cor;
ano = 2012;
modelo;
fabricante;
combustivel = "alcool";
ativo = true;


    constructor(tipo, cor) {
    this.tipo = tipo;
    this.cor = cor;

    }

    buzinar() {
    console.log("Bi");
    }

}

const umCarro = new Veiculo("carro" , "red")
