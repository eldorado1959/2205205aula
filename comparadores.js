// Definição da classe Carro
class Carro {
    constructor(nome, preco, consumo) {
        nome = nome;
        preco = 0;
        consumo = consumo;
    }

    // Método para verificar se um carro é melhor que outro com base no preço e consumo
    melhorQue(outroCarro, nome, preco, consumo) {
        let melhorCarro = '';

        if (preco < outroCarro.preco && consumo > outroCarro.consumo) {
            melhorCarro = nome + ' é melhor que ' + outroCarro.nome;
        } else if (preco > outroCarro.preco && consumo < outroCarro.consumo) {
            melhorCarro = outroCarro.nome + ' é melhor que ' + nome;
        } else {
            melhorCarro = nome + ' e ' + outroCarro.nome + ' são equivalentes';
        }

        return melhorCarro;
    }
}

// Instâncias de carros
let carro1 = new Carro('Carro A', 30000, 12);
let carro2 = new Carro('Carro B', 25000, 10);

// Comparação dos carros
console.log(carro1.melhorQue(carro2, carro1.nome, carro1.preco, carro1.consumo));
