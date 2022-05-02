var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, estaAtiva, dono) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }
    return Conta;
}());
var ContaEmpresa = /** @class */ (function (_super) {
    __extends(ContaEmpresa, _super);
    function ContaEmpresa(numero, saldo, estaAtiva, dono, limiteDeposito) {
        var _this = _super.call(this, numero, saldo, estaAtiva, dono) || this;
        _this.limiteDeposito = limiteDeposito;
        return _this;
    }
    ContaEmpresa.prototype.deposito = function (valor) {
        if (this.limiteDeposito + this.saldo + valor <= 1000) {
            this.saldo + valor;
        }
        else {
            console.log("limite de depósito execedido");
        }
    };
    ContaEmpresa.prototype.imprimeValorConta = function () {
        console.log(this.saldo);
    };
    return ContaEmpresa;
}(Conta));
var contaEmp = new ContaEmpresa(12, 200, true, "Rodrigo", 1000);
contaEmp.deposito(3500);
