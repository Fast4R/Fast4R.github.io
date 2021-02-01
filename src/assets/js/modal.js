const modalBtn = document.querySelectorAll("[data-modal]");
const modalClose = document.querySelectorAll(".modal__close");

modalBtn.forEach(item => {
    item.addEventListener('click', event =>{
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);

        modal.classList.add('show');
    });
});

modalClose.forEach(item =>{
    item.addEventListener('click', event =>{
        let currentModal = event.target.closest(".modal");

        currentModal.classList.remove("show");
    })
})