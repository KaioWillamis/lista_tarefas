
/*Variaveis do modal menu lateral*/
const abrir_navLateral = document.querySelector(".botton_list");
const menu_lateral = document.querySelector("#menu_lateral");
const fechar_navLateral = document.querySelector(".fechar_navLateral");

/*Variaveis do modal de Login*/
const modal = document.querySelector("#modal");
const abrir_modal = document.querySelectorAll(".abrir_modal");
const fechar_modal = document.querySelector(".fechar_modal");
const esqueci_senha = document.querySelector("#esqueci_senha");

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
