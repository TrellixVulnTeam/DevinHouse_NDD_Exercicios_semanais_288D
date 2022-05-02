export interface Produto{
    name:string,
    valor:number,
    codigo:number,
    quantidade:number,
    emEstoque:boolean

    comprar?(produto:Produto, quantidade:number):any;
}