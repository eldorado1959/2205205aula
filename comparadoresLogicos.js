// Função para verificar se um time tem um elenco melhor que outro
function melhorElenco(nome1, mediaIdade1, titulos1, posicaoAtual1, nome2, mediaIdade2, titulos2, posicaoAtual2) {
    if (mediaIdade1 < mediaIdade2 && titulos1 > titulos2 && posicaoAtual1 < posicaoAtual2) {
        return `${nome1} tem um elenco melhor que ${nome2}.`;
    } else if (mediaIdade1 > mediaIdade2 && titulos1 < titulos2 && posicaoAtual1 > posicaoAtual2) {
        return `${nome2} tem um elenco melhor que ${nome1}.`;
    } else {
        return `Os elencos de ${nome1} e ${nome2} são equivalentes.`;
    }
}

// Atributos dos times Internacional e Grêmio
let internacionalNome = 'Internacional';
let internacionalMediaIdade = 27;
let internacionalTitulos = 45;
let internacionalPosicaoAtual = 3;

let gremioNome = 'Grêmio';
let gremioMediaIdade = 28;
let gremioTitulos = 40;
let gremioPosicaoAtual = 5;

// Comparação dos elencos
console.log(melhorElenco(internacionalNome, internacionalMediaIdade, internacionalTitulos, internacionalPosicaoAtual, gremioNome, gremioMediaIdade, gremioTitulos, gremioPosicaoAtual));
