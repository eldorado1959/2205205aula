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

contaBancaria.depositar(contaBancaria, 100);
console.log(contaBancaria.consultarSaldo(contaBancaria)); // Deve imprimir 100
contaBancaria.sacar(contaBancaria, 50);
console.log(contaBancaria.consultarSaldo(contaBancaria)); // Deve imprimir 50
