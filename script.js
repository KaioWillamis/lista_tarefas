const abrir_navLateral = document.querySelector(".botton_list");
const menu_lateral = document.querySelector("#menu_lateral");
const fechar_navLateral = document.querySelector(".fechar_navLateral");
const modal = document.querySelector("#modal");
const abrir_modal = document.querySelector(".abrir_modal");
const fechar_modal = document.querySelector(".fechar_modal");

abrir_modal.addEventListener("click", function(){
    modal.style.display = "flex";
});

fechar_modal.addEventListener("click", function(){
    modal.style.display = "none";
});

abrir_navLateral.addEventListener("click",function(){
    menu_lateral.style.display = "flex";
});

fechar_navLateral.addEventListener("click", function(){
    menu_lateral.style.display = "none"
})
