# # Web-Front

## # Indice

<a href="#Contexto"># Contexto </a>
<br>
<a href="#-Linguagens-Usadas"># Linguagens Usadas </a>
<br>
<a href="#-Comandos"># Comandos </a>
<br>
<a href="#-CSS">#  CSS </a>
<br>
<a href="#Aula-1">#  Aula 1 </a>
<br>
<a href="#Aula-2">#  Aula 2 </a>
<br>
<a href="#Aula-3">#  Aula 3 </a>
<br>
<a href="#Aula-4">#  Aula 4 </a>
<br>
<a href="#Aula-7">#  Aula 7 </a>
<br>
<a href="#Aula-8">#  Aula 8 </a>
<br>
<a href="#Aula-9">#  Aula 9 </a>
<br>
<a href="#-Obs">#  Observações </a>
<br>
<a href="#-Autor"> # Autor </a>
<br>

<hr>
<hr>

## Contexto:

   * Esse README foi criado com o propósito se reunir os comandos, ensinamentos, e dicas sobre o curso de Web-Front da FIAP; lecionado por: Giovanni Ribeiro Pinto. 

   * Além disso, esse README desempenha a função de centralizar, organizar e facilitar o entendimento. Além de relembrar os comando e suas funções mais facilmente.

## # Linguagens Usadas
#### 1. Html
#### 2. CSS
#### 3. JavaScript

<hr>
<hr>

## # Comandos

1. ### Aula 1

    * Aula teorica, sobre a introducao ao HTML e JavaScript

<hr>
<hr>

2. ### Aula 2

    ### HTML:

    * <h4> script -- </h4> comando que serve para inumeras coisas, como anexar outra pagina de codigo, criar eventos e ate estilizar. <br> Porem, ele deve ser colocado no head ou no final do body, evitando ao maximo colocalo no meio do codigo.
        
        - <h5> src --</h5> busca um arquivo na maquina ou na nuvem, devendo fornecer o caminho para o arquivo

        - <h5> type --</h5> Define o tipo de arquivo, sendo obrigatorio informar o tipo.
        <hr>

    - <h4> !DOCTYPE html -- </h4> define o arquivo em questo como sendo do tipo html, ou seja que ira rodar no front (mostra ao usuario).

         <hr>
         
        - <h5> head -- </h5> É a cabeca do site, nao sendo mostrado ao usuario serve para rodar e chamar codigo de outros lugares, bem como definir algumas coisas basicas, como o script e o tipo de linguagem

            - <h6> meta charset = "UTF-8" -- </h6> define a linguagem sendo portugues-br, para dar mais flexibilidade ao digitar algo 
            
            - <h6> title -- </h6> adiciona um titulo ao site, algo que pode ser visto no topo da janela, onde faz frontera com outras paginas

         <hr>        

        - <h5> body -- </h5> Cria o corpo do site, onde o que será escrito podera ser exibido ao usuario.

            - <h6> button -- </h6> cria um botao, porem ele nao faz nada por enquanto
                - <h6> onclick -- </h6> cria um evento, onde ele executa alguma acao.

    ### JavaScript: 

    * <h4> document.write -- </h4> adiciona uma mensagem na tela, porem nao e muito utilizado, pois esta ultrapassado.

         <hr>

    * <h4> console.log --</h4> usado para exibir uma mensagem na tela, sendo o mais atual e usado.
         
         <hr>

    * <h4> let -- </h4> Cria uma variavel, nao importando se é string, boolean, ou numero inteiro ou fracionario 


<hr>
<hr>

3. ### Aula 3

    ### JavaScript

    * <h4> .toString -- </h4> propriedade que transforma o valor de uma variavel numerica em string. <br> Sendo usado depois da variavel que contem o valor numerico  

         <hr>

    * <h4> .replace() -- </h4> propriedade que subistitui algum valor dentro de uma STRING. <br> Sendo usada depois da variavel que tera a substituicao, para subistituir se deve colocar o termo a ser subistituido e depois o que ira substituir
        
         <hr>

    * <h4> typeof -- </h4> pega somente o tipo da variavel, podendo ser: string, boolean, ou numero inteiro/fracionario

         <hr>

    * <h4> let variavel = ...  : </h4>
        
        - <h5> null --  </h5> variavel vazia, nao tendo valor
        
        - <h5> let variavel ; </h5> variavel com valor indefinido
        
        - <h5> = valor  </h5> cria uma variavel que tem um valor, sendo string(entre aspas ""), numero ou boolean (true or false)

<hr>
<hr>

4. ### Aula 4

    ### JavaScript

    * <h4> let -- </h4> cria uma variavel que pode mudar seu valor

        <hr>

    * <h4> .table -- </h4> cria uma tabela que deve ser usada no console.log, se a utiliza depois da variavel

        <hr>

    * <h4> .includes() -- </h4> verifica a lista e diz se tem algo desejado na lista ou nao na lista

        <hr>

    * <h4> ? -- </h4> faz uma pergunta ao codigo. <br> EX: const resultado = (numero % 2 == 0) ? "par" : 'impar'; <br> No caso seria como: 'o numero e divisivel por 2? se sim é par, se nao sera impar'

<hr>
<hr>

5. ### Aula 5

    * Checkpoint 2 

<hr>
<hr>

7. ### Aula 7

    ### javaScript: 

    * <h4> for </h4> percorre uma lista, ela pode ter duas estruturas diferntes sendo elas:

        - <h5> for "variavel" of "lista" </h5> for (let variiavel of lista){}; nesse modelo cria uma variavel que ira percorrer a lista definida

        - <h5> for </h5> for (let i = 0; i (operador logico) condicao; i++ (para passar para o proximo)); sendo o "i" a variavel criada

    * <h4> (`${variavel} texto`) </h4> na resposta permite colocar uma "string" no meio das variaveis. <br> Para poder fazer isso, se deve usar " (`texto ${variavel} texto`)  " 

    * <h4> variavel.push -- </h4> adiciona um elemento a alguma variavel

        <hr>

    * <h4> lenght -- </h4> permite pegar o quantos termos tem dentro da lista

        <hr>

    * <h4> operacoes basicas -- </h4> 

        - <h5> valor++ --</h5> soma mais 1 na variavel que conter algum
         <hr>
        - <h5> valor--  --</h5> subtrai 1 na variavel que contem algum valor
         <hr>
        - <h5> valor *= numero --</h5> faz a multiplicacao do valor da variavel com o numero depois do igual
         <hr>
        - <h5> valor /= --</h5> faz a divisao do valor da variavel com o numero depois do igual

    * <h4> while (condicao) --</h4> Cria uma estrutura de condicao que ira se repetir ate que a condicao seja satisfeita. <br> Porem, para poder funcionar e peciso um contador fazendo um encrementacao

<hr>
<hr>

8. ### Aula 8

    ### JavaScript:

    * <h4> function nome_da_funcao(argumeto) -- </h4> É uma funcao, que pode ser reutilizada. Além disso ela serve para fazer acoes de maneira repetitiva. <br> O nome da funcao serve para nomear a funcao para poder reutiliza-la e para chama-la. <br> O argumeto e um parametro, e esse argumeto e dinamico, podendo ser mutavel e reutilizado

        <hr>

    * <h4> .querySelector("") -- </h4> propriedade que procura e pega algo no html, seja uma classe, ID ou um comando

        - <h5> .classe -- </h5> seleciona uma classe, e deve ser colocada dento do parenteses

         <hr>

        - <h5> #ID -- </h5> seleciona um ID, e deve ser colocada dento do parenteses


    * <h4> .addEventListener -- </h4> Propriedade

        - <h5> function -- </h5> inicia uma funcao, ou seja, realiza comandos caso o addEventListener seja ativado
        <hr>
        - <h5> style -- </h5> ...
        <hr>
        - <h5> display -- </h5> seleciona onde ocorrera a acao, no caso sera no display (onde se apresenta)
        <hr>
        - <h5> none -- </h5> 'esconde'/retira algo do site
        <hr>
        - <h5> block -- </h5> bloqueia uma acao anterior

<hr>
<hrf>

9. ### Aula 9
    
    ## JavaScript: 

    * <h4> preventDefault() -- </h4> previne um evento no browser

        <hr>

    * <h4> .value -- </h4> propriedade que verifica o valor de algo, deve ser usada depois de uma variavel

        <hr>

    * <h4> .trim() -- </h4> retira todos os espacos da string

        <hr>

    * <h4> operadores logicos: </h4>

        <h5> === -- </h5> compara o tipo e o valor de algo
        <hr>
        <h5> == -- </h5> verifica somente o valor
        <hr>
        <h5> = -- </h5> atribui algum valor
        <hr>

    * <h4> textContent -- </h4> adiciona alguma mensagem

        <hr>

    * <h4> classList -- </h4> ele altera elementos do css

        <hr>

    * <h4> </h4>

        <hr>

    * <h4> </h4>

        <hr>




<hr>
<hr>

## # CSS:

<a href="https://github.com/Gustavo-b017/Front-End/blob/main/README.md#-CSS"> CSS no repositorio do Front-end. </a>

### tipos:

- <h4> .class {} -- </h4> Para se criar uma classe é necessario utilizar um " . " e depois o nome da classe. <br> Para chama-la deve seguir a estrutura: <comando class="nome"> OBS: todos os comandos devem ficar dentro da classe

    <hr>

- <h4> #ID_nome {} -- </h4> ID é uma especie de classe que so pode ser usada uma unica vez durante o codigo, mas pode ter mais de um ID. <br> O seu funcionamento e o mesmo da classe, com a unica difenda tendo a forma de chamar e que so pode ser usada uma unica vez, igual ao cpf. <br> Para poder chama-la e necessario ter a esturura: " <coamndo id="nome">

    <hr>

- <h4> body {} -- </h4> Atribui as propriedades ao comando "body" no html, servindo para a pagina como um todo, podendo ser modificada caso outra propriedade faca isso.

    <hr>

- <h4> * {} -- </h4> seleciona todos os elementos do html

<hr>

### Coamndos:

- <h4> border -- </h4> Cria uma borda envolta da palavra, formando uma estrutura de um retangulo com a palavra no meio. <br> Essa propriedade pode ser modificada, com cor (solid cor_desejada), espessura (10...px), etc.. 

    * <h5> solid -- </h5> atribiu uma cor a borda

    * <h5> none -- </h5> propriedade que substitui o numero, ela retira a borda enquando delimita o tamanho da caixa

    <hr>

- <h4> border-radius --</h4> Deixa a borda arredondada. <br> Antes de poder usa-la, e necessario definir uma bordar antes.

    <hr>

- <h4> display -- </h4> divide o tamanho da tela por pedacos, podendo se diferente a depender a propriedade colocada.

    * <h5> grid </h5> divide o tamanho da tela em grades.

     <hr>

    * <h5> none -- </h5> 'esconde' toda a caixa onde essa propriedade foi definida
     
     <hr>

    * <h5> block -- </h5> bloqueia uma acao anterior. <br> Ex: bloqueia a acao de esconder o conteudo

    <hr>

- <h4> width -- </h4> define a altura de algo, podendo ser por pixel (px), fracao da pagina (fr), ou por porcentagem da tela (num%)

        <hr>

- <h4> height -- </h4> define a largura da pagina, podendo ser em pixel (px), fracao da pagina (fr), ou por porcentagem da tela (num%)

    <hr>

- <h4> grid-template-areas -- </h4> determina onde os elementos irao ficar no site. <br> (esta no front end, aula 8)
    
    <hr>

- <h4> grid-template-rows -- </h4> determina a quantidade de linhas que ira organizar o site. 

    <hr>

- <h4> grid-template-columns -- </h4> determina a quantidade de colunas no site

    <hr>

- <h4> background-color -- </h4> adiciona uma cor de fundo, podendo ser da caixa ou da pagina

    <hr>

- <h4> @media -- </h4> atua como se fosse o "if" no css

    <hr>

- <h4> mangin: -- </h4> define a magem em relacao a tela, da um espaco entre o conteudo e a tela. <br> Alem disso, pode servir como um espacamento entre caixas. <br>

    <h5> auto -- </h5> propriedade que deixa todos os elementos alinados com o centro da pagina. <br> Recomendo deixar assim: " margin: 0 auto "

    <hr>

- <h4> text-aling --  </h4> alinha o texto de acordo com as propriedades que definir nele.

    <h5> center -- </h5> alinha todo o texto no centro 

     <hr>

    <h5> right -- </h5> alinha o texto na direita

     <hr>

    <h5> left -- </h5> alinha o texto na esquerda

    <hr>

- <h4> color -- </h4> define a cor do texto

    <hr>

- <h4> line-height -- </h4> sem informacao

    <hr>

- <h4> padding -- </h4> define o tamanho da borda da caixa ao texto, ou seja, define o miolo da caixa ate chagar o conteudo em si

    <h5> padding-left -- <h5> da um espacamento do texto para a caixa do lado esquerdo apenas

    <hr>

- <h4> cursor: pointer -- </h4> define que quando o mause passar pelo botao, ira tomar a forma de uma 'mazinha'

    <hr>

- <h4> max-width -- </h4> define o tamanho maximo da caixa/classe

    <hr>

- <h4> background -- </h4> define a cor de fundo da classe

    <hr>

- <h4> font-size -- </h4> define o tamanho da fonte do texto 

<hr>
<hr>

### # Obs:

    * Aula teorica, sobre como funciona a web  e como ela foi desenvolvida

<hr>
<hr>

### # Autor
1. Gustavo Bezerra Assumção
        
   * estudande da FIAP
       
   * <a href="https://www.linkedin.com/in/gustavo-bezerra-829202289/"> linkedin </a>

   * <a href="https://www.instagram.com/gustavo_b017/"> Instagram </a>
  
   * <a href="https://github.com/Gustavo-b017"> Github </a>

