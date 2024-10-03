let nome = []
let nota = []
let media = 0

for(let i=0; i<5; i++){
    
    nome[i] = prompt("Insira seu nome")
    nota[i] = parseFloat(prompt("Insira sua nota"))
}

for(i=0; i<5; i++){
    media += nota[i]
} 
    media = media/5

    for(let i = 0; i < 5; i++){
        if(nota[i] < media){
            console.log(`${nome[i]} está abaixo da média`)
        }
    }