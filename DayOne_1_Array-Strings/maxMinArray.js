// exercicio para verificar qual é o maior e o menor elemento em um vetor
//exemplo [1,2,4,3,9] max:9 ; min:1


let vector=[12,2,5,9,29,32,1,41,3,7,22];
let max=vector[0];
let min=vector[0];

for(let i = 0 ; i <vector.length-1 ; i++){
    if(vector[i] > max){ // se o valor atual no laço for maior que o max , então esse deve ser o novo maior maior valor
        max=vector[i];
    }

    if(vector[i] < min){//caso o valor atual no laço for menor que o valor min , então atualizamos o nosso menor valor
        min=vector[i];
    }
}

console.log("Maior valor:"+max +"\nMenor Valor Min:"+min);
