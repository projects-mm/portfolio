const nav = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.navbar-container');

const Nav = () => {

    nav.addEventListener('click', changeIcon);
    navContainer.addEventListener('click', closeNavbar)

    function changeIcon() {
        nav.classList.toggle('active');
    }

    function closeNavbar(e) {
        if (e.target !== this)
        return; 
        nav.classList.remove('active');
        console.log('Click');
    }
};

export default Nav;