document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('sidebar-hidden');
        document.querySelector('button').classList.toggle('sidebar-header-button-toggled');
        /*document.querySelector('.content').classList.toggle('sidebar-hidden');*/
    });
});