const button = document.querySelector("button");
const inputNota = document.querySelector("#nota")

// criando um elemento
// "p" -- de paragrafo, onde seria o "paragrafo Mensagem"
// a variavel deve ser escrita em maiuscula (variavel)
const pMensagem = document.createElement('p')

function clearForm() {
    inputNota.value = ""
}

//  () => {} -- cria uma funcao anonima
button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(inputNota.value)

    const inputNotaValue = inputNota.value

    // validacao
    if(inputNotaValue.trim() === ""){
        //alert("*campo obrigatorio")
        pMensagem.textContent = "*Campo Obrigatorio"
        // insertAdjacentElement("afterend", mensagem) -- define onde a mensagem sera colocada e qual sera a mensagem
        inputNota.insertAdjacentElement("afterend", pMensagem)
        pMensagem.setAttribute("class", "erro")


        // ele nao passara dessa etapa ate responder a pergunta
        return false
    }

    // logica


    if (inputNotaValue >= 6){
        alert("vc ta aprovado")
    }
    else {
        alert("se fudeu, vai ficar mais")
    }

    pMensagem.classList.add("esconder")
    clearForm()
})


