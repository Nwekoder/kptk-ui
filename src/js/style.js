const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.querySelector('.sidebar-toggle')

sidebarToggle.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
    }else {
        sidebar.classList.add('open')
    }
})