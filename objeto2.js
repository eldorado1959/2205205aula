
/// objetos  


const readlineSync = require('readline-sync');

let contaBancaria = {
    saldo: 0,
    depositar: function(obj, valor) {
        obj.saldo += valor;
    },
    sacar: function(obj, valor) {
        obj.saldo -= valor;
    },
    consultarSaldo: function(obj) {
        return obj.saldo;
    }
};

let valorDeposito = Number(readlineSync.question('Digite valor a depositar: '));
contaBancaria.depositar(contaBancaria, valorDeposito);
console.log(contaBancaria.consultarSaldo(contaBancaria)); // Deve imprimir o saldo atualizado

let valorSaque = Number(readlineSync.question('Digite valor a sacar: '));
contaBancaria.sacar(contaBancaria, valorSaque);
console.log("Saldo atual: ", contaBancaria.consultarSaldo(contaBancaria)); // Deve imprimir o saldo atualizado
