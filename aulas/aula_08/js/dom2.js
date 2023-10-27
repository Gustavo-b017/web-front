// criando variaveis
const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

// criando funcoes
// addEventListener -- escuta eventos, e executa algo 
tirarDiv.addEventListener("click", function() {
    card.style.display = "none"
})

voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
})
