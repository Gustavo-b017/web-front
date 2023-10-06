// let - maneira de criar uma variavel, e uma variavel que pode ser alterada
// .table - cria uma tabela no console
// .inculdes - verifica a lista e verifica se esta ou nao, mostrando em booleana

let frutas = ['morango', 'banana', 'abacaxi', 'mamao', 'maca'];


if (frutas.includes('abacaxi')) {
    console.log("tem abaxi nas frutas")
}
else if (frutas.includes("pera")) {
    console.log("tem pera nas frutas")    
}
else {
    console.log(" nem a pera e nem o abacaxi existe em 'fruta'")
}
