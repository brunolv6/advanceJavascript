/* 
    FUNCTION SCOPE X BLOCK SCOPE
*/

var e = 1;
let f = 2;
const g = 3;

(function scope (){
    console.log("\nVariáveis geradas fora da função[SCOPE CHAIN], imprime DENTRO DA FUNÇÃO & FORA DO BLOCO " + e, f, g + "\n");
    if(3>2){
        console.log("Variáveis geradas fora da função[SCOPE CHAIN], imprime DENTRO DA FUNÇÃO & DO BLOCO " + e, f, g + "\n");
        console.log("Variaveis geradas dentro de bloco if de dentro de uma função\n")
        var a = 3; //var gera function scope
        let b = 4; //let gera block scope 
        const c = 5; //const gera block scope
        console.log(`Valor dentro da função e do bloco 'IF' é: \n\t\tvar a = ${a} \n\t\tlet b = ${b} \n\t\tconst c = ${c}\n`);
    }
    console.log(`Valor dentro da função e FORA do bloco 'IF' é: \n\t\tvar a = ${a} \n\t\tlet b = não pode ser acessado \n\t\tconst c = não pode ser acessado\n`);
    /* 
        LET E CONST GERAM BLOCK SCOPE, LOGO NÃO É ACESSADA FORA DO BLOCO "IF"
        console.log("valor de let b = " + b); 
        console.log("valor de const c = " + c); 
    */
})();
console.log("Variáveis geradas fora da função[SCOPE CHAIN], imprime FORA DA FUNÇÃO & DO BLOCO " + e, f, g + "\n");
console.log(`Valor FORA da função e FORA do bloco 'IF' é: \n\t\tvar a = não pode ser acessado \n\t\tlet b = não pode ser acessado \n\t\tconst c = não pode ser acessado\n`);

/* 
    SCOPE CHAIN
    if(variavel no seu scopo)
        return variavel
    else
        if(variavel no scopo da função que a gerou)
            return variavel da função que ele esta dentro
        else
            if(variavel no scopo da função que gerou a função que a gerou)
                return variavel da funcao da funcao que el esta dentro
            else
                if(......)
*/