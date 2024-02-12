
// Exercício determinar se um número é par ou impar
function parOuImpar(numero){

    // verificar se e par ou impar
    if(numero % 2 === 0){
        console.log("O número ", numero, " é par...")
    }else{
        console.log("O número ", numero, " é impar...")
    }
}

// chamada da função
parOuImpar(7)