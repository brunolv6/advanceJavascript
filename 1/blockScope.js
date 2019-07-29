/* 
    FUNCTION SCOPE X BLOCK SCOPE
*/

(function scope (){
    if(3>2){
        console.log("\nVariaveis geradas dentro de bloco if de dentro de uma função\n")
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

console.log(`Valor FORA da função e FORA do bloco 'IF' é: \n\t\tvar a = não pode ser acessado \n\t\tlet b = não pode ser acessado \n\t\tconst c = não pode ser acessado\n`);

/* 
    VAR GERA FUNCTION SCOPE, LOGO NÃO É ACESSADA FORA DA FUNÇÃO
    console.log("valor de var a = " + a); 
*/
