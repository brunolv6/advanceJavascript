/* 
    IMMEDIATELY INVOKE FUNCTION EXPRESSION (IIFE)
*/

(function teste1 (){
    console.log("\n(function teste1(){})() roda\n")
})();

/* ERROR sintaxe */
/* function teste2 (){
    console.log("function teste2(){}() roda")
}
 */

const teste3 = (() => {
  console.log("(teste3 = (() =>{})() roda\n")
})();

(() => {
    console.log("teste4 sem nada, como abaixo:");
    console.log("(() => {})()\n")
})();

/* teste1(); -> NÃO RODA porque função não foi criada apenas IIFE */
/* teste2(); -> RODA porque a função é criada se não houver () ao final*/
/* teste3(); -> NÃO RODA porque função não foi criada apenas IIFE*/
