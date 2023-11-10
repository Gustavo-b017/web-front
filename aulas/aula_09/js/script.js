// querySelector -- procura e pega algo no html ( se for "#" sera um ID, e se for "." sera uma classe)
const buttonMedicamentos = document.querySelector("#medicamentos")
const listaRemedios = document.querySelector(".remedios")

// variaveis da validacao
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
    // pega a tag button do html
const buttonValidacao = document.querySelector("button");
function clearform(){
    campoNome.value = ""
    campoCidade.value = ""
}


// funcao da validadacao
buttonValidacao.addEventListener("click", function(event){
    // preventDefault -- previne um evento no browser
    event.preventDefault()

    // value -- verifica o valor
    // === -- compara o o tipo e o valor
    // == -- verifica somante o valor
    // = -- recebe o valor
    // trim -- tira todos os espacos 
    if(campoNome.value.trim() === ""){
        alert("preencha o campo nome")
        return false
    }
    
    if(campoCidade.value.trim() === ""){
        alert("preencha o campo cidade")
        return false
    }

    clearform()

})


// addEventListener -- espera para ver se tem algum alguma acao
buttonMedicamentos.addEventListener("click", function(){
    // classList -- ele altera elementos do css
    listaRemedios.classList.add("d-block");
})


