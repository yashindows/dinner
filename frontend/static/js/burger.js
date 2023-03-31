const menu = document.querySelector('.sidebar-wrapper');
const menuBtn = document.querySelector('.menu-icon');

document.addEventListener('click', (e) => {
    const links = document.querySelectorAll('.link_close');
    links.forEach(el => {
        if(e.target == el){
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
        }
    });

    if(e.target == menuBtn){
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
    }
})
