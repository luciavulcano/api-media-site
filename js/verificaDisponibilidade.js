const disponivel = document.querySelector('#checkboxDisponível');

disponivel.addEventListener('click', function () {
    sectionCards.innerHTML = " "; 
    montaCards('verifica disponibilidade');
  
})