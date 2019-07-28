const obj = {
    name: 'Mago',
    vida: 100,
    //pq this gera contexto lexical fechado nele mesmo
    // no caso de uso de "arrow function"
    heal: function(arg1, arg2) {
        return this.vida += arg1 + arg2;
    }
}

const obj2 = {
    name: "arqueiro",
    vida: 20
}

console.log("vida antes:" + obj.vida);
//usa heal em mago
obj.heal(20, 30);
console.log("vida depois de se curar:" + obj.vida);

console.log("vida arqueiro antes:" + obj2.vida);
//funcao de um objeto afetando outro devido a this
//com objeto.funcaoObjeto.CALL(outroObjeto, param1, param2,..)
obj.heal.call(obj2, 20, 50);
console.log("vida arqueiro depois call:" + obj2.vida);

console.log("vida arqueiro antes:" + obj2.vida);
//funcao de um objeto afetando outro devido a this
//com objeto.funcaoObjeto.APPLY(outroObjeto, [param1, param2,..])
obj.heal.apply(obj2, [10, 5]);
console.log("vida arqueiro depois de apply:" + obj2.vida);

console.log("vida arqueiro antes:" + obj2.vida);
const curaArqueiro = obj.heal.bind(obj2);
console.log("vida arqueiro quando criou função mas não aplicou:" + obj2.vida);
curaArqueiro(50, 100);
console.log("vida arqueiro depois:" + obj2.vida);