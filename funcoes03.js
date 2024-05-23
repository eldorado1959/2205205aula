const readlineSync = require('readline-sync');

// Função para calcular a área de um triângulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Função para calcular a área de um retângulo
function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

// Função para calcular a área de um quadrado
function calcularAreaQuadrado(lado) {
    return lado * lado;
}

// Função para exibir o resultado
function exibirResultado(area, forma) {
    console.log(`A área do ${forma} é: ${area}`);
}

// Função para retornar ao menu inicial
function retornarMenu() {
    console.log('\nRetornando ao menu inicial...\n');
    executarPrograma();
}

// Função para executar o programa
function executarPrograma() {
    // Menu de opções
    console.log("|*********************************|");
    console.log("|Escolha forma para calcular area:|");
    console.log("|*********************************|");
    console.log("         [01] - Triangulo");
    console.log("         [02] - Retangulo");
    console.log("         [03] - Quadrado");
    console.log("         [04]- Sair do programa");

    // Receber a escolha do usuário
    let escolha = readlineSync.question("          Opcao: ");

    // Realizar a operação escolhida
    switch (escolha) {
        case '01':
            let baseTriangulo = readlineSync.question('Digite a base do triangulo: ');
            let alturaTriangulo = readlineSync.question('Digite a altura do triangulo: ');
            let areaTriangulo = calcularAreaTriangulo(Number(baseTriangulo), Number(alturaTriangulo));
            exibirResultado(areaTriangulo, 'triangulo');
            retornarMenu();
            break;
        case '02':
            let baseRetangulo = readlineSync.question('Digite a base do retangulo: ');
            let alturaRetangulo = readlineSync.question('Digite a altura do retangulo: ');
            let areaRetangulo = calcularAreaRetangulo(Number(baseRetangulo), Number(alturaRetangulo));
            exibirResultado(areaRetangulo, 'retangulo');
            retornarMenu();
            break;
        case '03':
            let ladoQuadrado = readlineSync.question('Digite o lado do quadrado: ');
            let areaQuadrado = calcularAreaQuadrado(Number(ladoQuadrado));
            exibirResultado(areaQuadrado, 'quadrado');
            retornarMenu();
            break;
        case '04':
            console.log("Saindo do programa...");
            break;
        default:
            console.log('Opcao invalida.');
            retornarMenu();
    }
}

// Executar o programa pela primeira vez
executarPrograma();


