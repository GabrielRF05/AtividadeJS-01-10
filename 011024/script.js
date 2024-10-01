let nome = []
let nota = []
let media = 0

for(let i=0; i<2; i++){
    
    nome = prompt("Insira seu nome")
    nota = prompt("Insira sua nota")
    
    
}

for(i=0; i<2; i++){
    media += nota[i]

    
    media = media/2

    if(nota[i] < media){
        console.log(`${nome[i]}  está abaixo da media`)

    }else if(nota[i] > media){
        console.log(`${nome[i]}  está acima da media`)
    }

}