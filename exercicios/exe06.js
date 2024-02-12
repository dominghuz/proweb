
// Números Primos
function numeroPrimoAte50(){

    // loop para verificar os números primos até 50
    for (let numero = 2; numero <=50; numero++) {
        let primo = true
        
        // verificar se o numero é primo
        for (let i = 2; i < numero; i++) {
            if(numero % i === 0){
                primo = false
                break //não é primo não precisa continuar
            }
        }

        // se é primo, mostra
        if (primo) {
            console.log(numero);
        }
    }
}

// chamada da função
numeroPrimoAte50()