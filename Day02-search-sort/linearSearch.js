function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


let arr=[22,10,12,15,21,1];
console.log("Se encontra na posição do vetor:"+linearSearch(arr,15));