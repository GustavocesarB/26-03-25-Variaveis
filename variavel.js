// Variáveis

var nomeDaVariavel = "Valor da Variável"; //

let nomeDaVariavelTemporaria = "Valor Temporário da Variável"; //let- variavel temporária

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da variável"; //const- permanece na memória mas não consegue mudar o valor dela 

console.log("nomedaVariável: ", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria; ", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vector1","vector2","vector3","vector4","vector5"];

console.log("matriz, vetor1:", matriz[0]);

for (let i = 0; i < matriz.lenght; i++) { //for- estrutura de repetição pré-definida, tendo início/meio/fim
    console.log("matriz[" + i +"]:", matriz[i]);
}

class NomeDoObjeto {
    constructor (parametroUm, parametroDois) {
        //this.parametroUm = "Valor 1";
        //this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
    }
    metodoMostrarParametros(parametroUm, parametroDois) {
        //this.parametroUm = "Valor 1";
        //this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois;
    }
}
const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));




class Monitor { //declaração da classe Monitor, a qual se transformará em um novo objeto, quando se declara em uma variavél Monitor
    constructor (marca, tamanhoTela, resolucao, taxaAtualizacao, tipoPainel, tempoResposta, conectores) { //declaração do método construtor, o qual vai receber os parâmetros iniciais, os quais se converterão em propriedades de classe
    this.marca = marca; //Parametro (quando declarando com this. antes) é uma propriedade de classe
    this.tamanhoTela = tamanhoTela;
    this.resolucao = resolucao;
    this.taxaAtualizacao = taxaAtualizacao;
    this.tipoPainel = tipoPainel;
    this.tempoResposta = tempoResposta;
    this.conectores = conectores;
    }
    metodoMostrarMonitor(marca, tamanhoTela, resolucao, taxaAtualizacao, tipoPainel, tempoResposta, conectores) { //declaração do método que vai mostrar os parâmetros, não as propriedades
        this.marca = marca;
        this.tamanhoTela = tamanhoTela;
        this.resolucao = resolucao;
        this.taxaAtualizacao = taxaAtualizacao;
        this.tipoPainel = tipoPainel;
        this.tempoResposta = tempoResposta;
        this.conectores = conectores;
        return this.marca + " - " + this.tamanhoTela + " - " + this.resolucao + " - " + this.taxaAtualizacao + " - " + this.tipoPainel + " - " + this.tempoResposta + " - " + this.conectores;
    }
}
const monitor = new Monitor(); //const é somente leitura
console.log(monitor.metodoMostrarMonitor("marca", "tamanhaTela", "resolucao", "taxaAtualizacao ", "tipoPainel ", "tempoResposta ", "conectores"));