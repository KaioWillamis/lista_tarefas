/*Variaveis da lista*/
const titulos_lista = document.querySelectorAll(".titulos_lista");

/*Variaveis do modal menu lateral*/
const abrir_navLateral = document.querySelector(".botton_list");
const menu_lateral = document.querySelector("#menu_lateral");
const fechar_navLateral = document.querySelector(".fechar_navLateral");

/*Variaveis do modal de Login*/
const modal = document.querySelector("#modal");
const abrir_modal = document.querySelectorAll(".abrir_modal");
const fechar_modal = document.querySelector(".fechar_modal");
const esqueci_senha = document.querySelector("#esqueci_senha");

/*Função para atualizar titulo da Lista*/
titulos_lista.forEach(function(titulo_lista) {
    titulo_lista.addEventListener("click", function() {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("input-editavel");
        input.value = titulo_lista.textContent;  // Pega o texto do título específico
        titulo_lista.textContent = ""; // Limpa o conteúdo do título
        titulo_lista.appendChild(input); // Adiciona o input ao DOM

        input.focus();

        input.addEventListener("blur", function() {
            titulo_lista.textContent = input.value || "Titulo da Lista"; // Atualiza o título específico
        });

        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                input.blur(); // Salva ao pressionar Enter
            }
        });
    });
});

/* Funções do modal Login*/
abrir_modal.forEach((btn) => {
    btn.addEventListener("click", function () {
        modal.style.display = "flex";
    });
});

fechar_modal.addEventListener("click", function(){
    modal.style.display = "none";
});

esqueci_senha.addEventListener("click", function(){
    window.location.href = 'esqueci_senha.html';
});
/*Fim da funções do modal login*/


/*Funções para abrir menu Lateral*/
abrir_navLateral.addEventListener("click",function(){
    menu_lateral.style.display = "flex";
});

fechar_navLateral.addEventListener("click", function(){
    menu_lateral.style.display = "none"
});
/*Fim das funções de abrir o menu Lateral*/
