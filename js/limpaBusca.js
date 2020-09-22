const limpaRadio = document.querySelector('#limpaRadio');

limpaRadio.addEventListener('click', function () {
    sectionCards.innerHTML = " ";
    montaCards();
    desmarcaCheckbox();
});

function desmarcaCheckbox() {
    let checkboxes = document.querySelectorAll('[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}