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
    console.log("Escolha a forma para calcular a area:");
    console.log("01 - Triangulo");
    console.log("02 - Retangulo");
    console.log("03 - Quadrado");

    // Receber a escolha do usuário
    let escolha = readlineSync.question("Opcao: ");

    // Realizar a operação escolhida
    switch (escolha) {
        case '01':
            let baseTriangulo = readlineSync.question('Digite base do triangulo: ');
            let alturaTriangulo = readlineSync.question('Digite altura do triangulo: ');
            let areaTriangulo = calcularAreaTriangulo(Number(baseTriangulo), Number(alturaTriangulo));
            exibirResultado(areaTriangulo, 'triangulo');
            retornarMenu();
            break;
        case '02':
            let baseRetangulo = readlineSync.question('Digite base do retangulo: ');
            let alturaRetangulo = readlineSync.question('Digite altura do retangulo: ');
            let areaRetangulo = calcularAreaRetangulo(Number(baseRetangulo), Number(alturaRetangulo));
            exibirResultado(areaRetangulo, 'retngulo');
            retornarMenu();
            break;
        case '03':
            let ladoQuadrado = readlineSync.question('Digite o lado do quadrado: ');
            let areaQuadrado = calcularAreaQuadrado(Number(ladoQuadrado));
            exibirResultado(areaQuadrado, 'quadrado');
            retornarMenu();
            break;
        default:
            console.log('Opcao invalida.');
            retornarMenu();
    }
}

// Executar o programa pela primeira vez
executarPrograma();
