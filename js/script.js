const navbar = document.getElementsByClassName('navbar')[0];
const header = document.getElementsByClassName('header')[0];
document.addEventListener('scroll',(e)=>{
    const headerHeight = header.offsetHeight;
    if(window.scrollY >=  headerHeight - 150){
        navbar.classList.add('bg-dark');
    }
    else {
        navbar.classList.remove('bg-dark');
    }
})