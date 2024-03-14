let isResizing = false;
let lastX = 0;

const sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mousedown', (event) => {
    if (event.offsetX > sidebar.offsetWidth - 10) {
        isResizing = true;
        lastX = event.clientX;
    }
});

document.addEventListener('mousemove', (event) => {
    if (isResizing) {
        const width = sidebar.offsetWidth + (event.clientX - lastX);
        sidebar.style.width = width + 'px';
        lastX = event.clientX;
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
});