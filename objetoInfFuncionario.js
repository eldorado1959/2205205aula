// Criando um objeto para representar um funcionário
let funcionario = {
    nome: "Fulano",
    cargo: "Desenvolvedor",
    salario: 5000
};

// Função para imprimir informações do funcionário
function imprimirFuncionario(funcionario) {
    console.log("Nome: " + funcionario.nome);
    console.log("Cargo: " + funcionario.cargo);
    console.log("Salário: R$ " + funcionario.salario.toFixed(2));
}

// Imprimindo as informações do funcionário
console.log("Informações do Funcionário:");
imprimirFuncionario(funcionario);
