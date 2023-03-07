const nav = document.querySelector('.nav-menu');
const navCheck = document.querySelector('#nav-check');


const Nav = () => {

    //Eventlistener
    // Close navbar when click event is out of nav element
    window.addEventListener('click', closeNavbar);

    // Change menu icon
    nav.addEventListener('click', changeIcon);


    // Functions
    function changeIcon() {
        nav.classList.toggle('active');
    }

    function closeNavbar(e) {
        if (navCheck.checked) {
            console.log(e);
            if (    
                e.target.nodeName === 'LI' 
                || e.target.nodeName === 'NAV' 
                || e.target.nodeName === 'A' 
                || e.target.id === 'nav-check' 
                || e.target.nodeName === 'INPUT' 
                || e.target.className === 'nav-menu' 
                || e.target.className === 'menu-icon'
                ) {
                return;
            } else {
                
               navCheck.checked = false;
               nav.classList.remove('active');
            }
        }
    }

};

export default Nav;