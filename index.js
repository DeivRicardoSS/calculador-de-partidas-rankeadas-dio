function calcularRanking(baseCalculo) {
    if(baseCalculo < 10) {
        return "Ferro";
    } else if(baseCalculo  >= 11 && baseCalculo <= 20) {
        return "Bronze";
    } else if(baseCalculo >= 21 && baseCalculo <= 50) {
        return "Prata";
    } else if(baseCalculo >= 51 && baseCalculo <= 80) {
        return "Ouro";
    } else if(baseCalculo >= 81 && baseCalculo <= 90) {
        return "Diamante";
    } else if(baseCalculo >= 91 && baseCalculo <= 100) {
        return "Lendário";
    } else if(baseCalculo >= 101) {
        return "Imortal";
    }
}

let vitorias = 126;
let derrotas = 26
let baseCalculo = vitorias - derrotas;
console.log(`O heroi está no nível ${baseCalculo} e está no nível ${calcularRanking(baseCalculo)}`);