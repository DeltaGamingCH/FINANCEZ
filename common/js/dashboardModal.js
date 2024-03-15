document.addEventListener("DOMContentLoaded", function() {
    let modals = document.querySelectorAll('.myModal');
    let editBtns = document.querySelectorAll('.edit-btn');
    let closeBtns = document.querySelectorAll('.close-btn');
    
    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    editBtns.forEach(function(editBtns, index) {
        editBtns.addEventListener('click', function() {
            openModal(modals[index]);
        });
    });

    closeBtns.forEach(function(closeBtns) {
        closeBtns.addEventListener('click', function() {
            closeModal(closeBtns.parentElement.parentElement);
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
})
