// Toggle clas active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar slide bar untuk menghilangkan nav
const menu = document.querySelector ('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

function kirim(msg){
    alert(msg)
}

