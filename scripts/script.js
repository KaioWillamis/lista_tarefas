/*Variaveis da lista*/
const titulos_lista = document.querySelectorAll(".titulos_lista");

/*Variaveis do modal menu lateral*/
const abrir_navLateral = document.querySelector(".botton_list");
const menu_lateral = document.querySelector("#menu_lateral");
const fechar_navLateral = document.querySelector(".fechar_navLateral");
const meu_desempenho = document.querySelectorAll(".meu_desempenho");

/*Variaveis do modal de Login*/
const modal = document.querySelector("#modal");
const conteudo_modal = document.querySelector(".conteudo_modal");
const cadastrarLogin = document.querySelector("#cadastrarLogin");
const modal_esqueci_senha = document.querySelector("#modal_esqueci_senha");
const buttomcadastrarLogin = document.querySelector(".buttomcadastrarLogin");
const voltarModal = document.querySelectorAll(".voltar_modal");
const abrir_modal = document.querySelectorAll(".abrir_modal");
const fechar_modal = document.querySelectorAll(".fechar_modal");
const esqueci_senha = document.querySelector("#esqueci_senha");

/*Variaveis do input de Login*/
const input_login_senha = document.querySelector("#senha");
const icone_senha_login = document.querySelector("#icone_senha_login");

/* Função para atualizar título da Lista */
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
            if (input.value === "" || input.value === "adicione o titulo da lista...") {
                titulo_lista.textContent = "adicione o titulo da lista..."; // Define o texto padrão
                titulo_lista.style.color = "#8484845a"; // Cor cinza
            } else {
                titulo_lista.textContent = input.value; // Atualiza o título com o novo valor
                titulo_lista.style.color = "#4A1C7D"; // Cor preta (ou outra de sua preferência)
            }
        });

        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                if (input.value === "" || input.value === "adicione o titulo da lista...") {
                    titulo_lista.textContent = "adicione o titulo da lista..."; // Define o texto padrão
                    titulo_lista.style.color = "#8484845a"; // Cor cinza
                } else {
                    titulo_lista.textContent = input.value; // Atualiza o título com o novo valor
                    titulo_lista.style.color = "black"; // Cor preta
                }

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

fechar_modal.forEach((btn) =>{
    btn.addEventListener("click", function(){
        modal.style.display = "none";
        conteudo_modal.style.display = "flex";
        cadastrarLogin.style.display = "none";
    });
});

voltarModal.forEach((btn) => {
    btn.addEventListener("click", function(){
        // Oculta os outros modais
        modal_esqueci_senha.style.display = "none";
        cadastrarLogin.style.display = "none";

        // Exibe o modal principal (conteudo_modal)
        conteudo_modal.style.display = "flex";
    });
});

esqueci_senha.addEventListener("click", function(){
    conteudo_modal.style.display = "none"
    modal_esqueci_senha.style.display = "flex";
});

buttomcadastrarLogin.addEventListener("click", function(){
    conteudo_modal.style.display = "none";
    cadastrarLogin.style.display = "flex";
});
/*Fim da funções do modal login*/


/*Funções para abrir menu Lateral*/
abrir_navLateral.addEventListener("click",function(){
    menu_lateral.style.display = "flex";
});

fechar_navLateral.addEventListener("click", function(){
    menu_lateral.style.display = "none"
});

meu_desempenho.forEach((btn) =>{
    btn.addEventListener("click", function(){
        window.location.href = "meuDesempenho.html";
    });
});
/*Fim das funções de abrir o menu Lateral*/


/*Funções do Form de Login*/
icone_senha_login.addEventListener("click", function(){
    if(input_login_senha.type === "password"){
        input_login_senha.type = "text";
        icone_senha_login.classList.remove("bi-eye");
        icone_senha_login.classList.add("bi-eye-slash");
    }
    else{
        input_login_senha.type = "password";
        icone_senha_login.classList.remove("bi-eye-slash");
        icone_senha_login.classList.add("bi-eye");
    }
});
