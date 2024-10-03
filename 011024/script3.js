let vetorA = []
let vetorB = []
let vetorC = []

for(let numA = 0; numA <5; numA++){
    vetorA[numA] = parseFloat(prompt("Insira o número"))

}
    console.log(`Vetor A: ${vetorA}`)


for(let numB = 0; numB <5; numB++){
    vetorB[numB] = (Math.floor(Math.random() * 11));

}
    console.log(`Vetor B: ${vetorB}`)

    console.log('')

for(let numC = 0; numC <5; numC++ ){
    vetorC[numC] = vetorA[numC] * vetorB[numC]

}
    console.log(`Vetor C: ${vetorC}`)


