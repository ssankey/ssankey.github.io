const header = document.querySelector('header')
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",this.window.scrollY>0)
})
document.getElementById("toggle").addEventListener("click",toggleMenu)
document.getElementById("about").addEventListener("click",toggleMenu)
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}