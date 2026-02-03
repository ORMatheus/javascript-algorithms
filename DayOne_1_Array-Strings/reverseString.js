//exercicios 1 , pegar uma string qualquer e dar sua versão invertida.
//por exemplo a string "Estudar programação é uma pratica diaria "
// deve ter como retorno "airaid acitarp amu é oâçamarporp radutse"

let string= "Estudar programação é uma pratica diaria";
let arrString=string.split("");
let stringfinal=[];

for(let i =arrString.length-1 ; i >= 0 ;i-- ){
    stringfinal.push(arrString[i]);
}
console.log('\n');
console.log(stringfinal.join(""));
