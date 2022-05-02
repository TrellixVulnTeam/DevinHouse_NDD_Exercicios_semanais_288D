class Conta{
protected numero:number;
protected saldo:number;
protected estaAtiva:boolean;
protected dono:string;

    constructor(numero:number,saldo:number,estaAtiva:boolean,dono:string){
        this.numero = numero;
        this.saldo = saldo
        this.estaAtiva = estaAtiva
        this.dono = dono;
    }

}

class ContaEmpresa extends Conta{
    private limiteDeposito:number;
    constructor(numero,saldo,estaAtiva,dono,limiteDeposito){
        super(numero,saldo,estaAtiva,dono)
        this.limiteDeposito = limiteDeposito
    }

    deposito(valor:number){
        if(this.limiteDeposito + this.saldo + valor <= 1000){
            this.saldo + valor
        }else{
            console.log("limite de depósito execedido")
        }
    }

    imprimeValorConta(){
        console.log(this.saldo)
    }
    


}

let contaEmp = new ContaEmpresa(12,200,true,"Rodrigo",1000)
contaEmp.deposito(3500)



