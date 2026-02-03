//exercicio 3 , verificar se uma palavra é um palindromo
// Entrada: "arara"
// Saída: true

// Entrada: "banana"
// Saída: false

function palindromo(str){
    // pegar a palavra e sua inversa e verificar igualdade
    let inverse=[];

    for(let i = 0 ; i < str.length - 1 ; i++){
        inverse.push(str[i]);
    }

    if (inverse.join("") === str) {
        console.log("Esta palavra: " + str + " É um palíndromo!");
        return true;
    } else {
        console.log("Esta palavra: " + str + " Não é um palíndromo!");
        return false;
    }
}

palindromo("arara");
palindromo("banana");



