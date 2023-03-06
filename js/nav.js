const nav = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.navbar-container');

const Nav = () => {

    nav.addEventListener('click', changeIcon);

    function changeIcon() {
        nav.classList.toggle('active');
    }

};

export default Nav;