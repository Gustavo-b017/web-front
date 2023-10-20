const frutas = ["maca", "banana", "uva", "pera"]

// length -- pega o tamanho da lista
// $ -- para poder colocar variavel
// `` -- tamplate string, para poder colocar algo antes ou depois das variaveis. EX: print(f"testo {variavel}") - python
for (let i = 0; i <frutas.length; i++){
    console.log(`${i} - ${frutas[i]}`)
}

