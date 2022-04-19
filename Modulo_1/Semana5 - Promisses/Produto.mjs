export class Produto{
    nome ;
    preco ;
    emEstoque ;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

export class Pedido{
    nomeCliente  ;
    numeroPedido ;
    dataPedido ;
    estaPago ;
    listaProdutos ;
    total = 0;
    
    adicionarProduto(produto){this.listaProdutos.push(produto)}
    valorTotal(){this.listaProdutos.forEach(element => {
        this.total = this.total + (element.preco * element.quantidade)
    });
    console.log(this.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    }

    constructor(numeroPedido, nomeCliente){
    this.numeroPedido = numeroPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date()
    this.estaPago = false;
    this.listaProdutos = []
    }
    
}




