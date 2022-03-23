const menuBurger = document.getElementById("menuBurger");
const headerMenu = document.querySelector(".header__menu");

menuBurger.addEventListener("click", function() {
    headerMenu.classList.toggle("header__menu_active");
});

const openModalBtns = document.querySelectorAll(".header__top-btn");
const closeModalBtns = document.querySelectorAll(".modal__close"); 
const modalWrapper = document.querySelector(".modal__wrapper");

openModalBtns.forEach(function(openModalBtn) {
    openModalBtn.addEventListener("click", function(event) {
        event.preventDefault();
    
        let modalId = this.getAttribute("data-modal");
        let modalElement = document.querySelector('.modal[data-modal="' + modalId + '"]');

        modalElement.classList.add("modal_active");
        document.body.style.overflow = "hidden";
    });
});

closeModalBtns.forEach(function(closeModalBtn) {
    closeModalBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let parentModal = this.closest(".modal");

        parentModal.classList.remove("modal_active");
    });
});