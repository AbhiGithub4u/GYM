let mobile = document.getElementById("mobile-menu");
let hambg = document.getElementById("ham-toogle");

hambg.onclick = function(){
    mobile.classList.toggle('active')
}
window.onscroll=()=>{
    mobile.classList.remove('active')

}