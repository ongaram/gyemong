const handlerBtn = document.querySelector('.handlerBtn');
const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebarBtn');

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarBtn.classList.toggle('toggle');
    sidebarBtn.classList.toggle('right');
    handlerBtn.classList.toggle('hide');
});