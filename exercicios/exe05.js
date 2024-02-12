
// Aprovado ou reprovado
function calcularFactorial(numero){

    // inicialização do factorial
    let factorial = 1

    // calcular
    for (let i = 1; i <= numero; i++) {
        factorial *=i
    }

    // retornar resultado
    return factorial
}

// mostrar resultado
let resultadoFactorial = calcularFactorial(5)
console.log("O factorial é: ", resultadoFactorial);