const readlineSync = require('readline-sync');

// Array para armazenar os produtos cadastrados
let produtos = [];

// Função para cadastrar um produto
function cadastrarProduto() {
    console.log("\nCadastro de Produto:");

    // Solicita nome do produto
    let nome = readlineSync.question('Nome do produto: ');

    // Solicita preço do produto
    let preco = Number(readlineSync.question('Preço do produto: '));

    // Solicita quantidade do produto
    let quantidade = Number(readlineSync.question('Quantidade do produto: '));

    // Armazena o produto no array de produtos
    produtos.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    });

    console.log("Produto cadastrado com sucesso!");
}

// Função para exibir a lista de produtos cadastrados
function listarProdutos() {
    console.log("\nLista de Produtos Cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`Produto ${index + 1}: ${produto.nome} - Preço: R$ ${produto.preco} - Quantidade: ${produto.quantidade}`);
    });
}

// Menu principal
let continuar = true;
while (continuar) {
    console.log("\nMenu:");
    console.log("[01] Cadastrar Produto");
    console.log("[02] Listar Produtos");
    console.log("[03] Sair");

    let opcao = readlineSync.question('Escolha uma opção: ');

    switch (opcao) {
        case '01':
            cadastrarProduto();
            break;
        case '02':
            listarProdutos();
            break;
        case '03':
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }
}

console.log("Programa encerrado.");



