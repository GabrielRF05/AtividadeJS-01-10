let num = []

for(let i = 0; i <5; i++){
    num[i] = parseFloat(prompt("Insira o número"))

    if(num[i] < 0){
        console.log(`Esses são os numeros negativos: ${num[i]}`)
    }
}

