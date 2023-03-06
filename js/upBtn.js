const up = document.querySelector('.up');


export const Up = () => {
    window.onscroll = function() {
        let y = window.scrollY;
        if (y > 200) {
            up.setAttribute('style', 'display: flex');
            up.setAttribute('data-aos', 'fade-left');
        } else {
            up.setAttribute('style', 'display: none')
        }
    }

    up.addEventListener('click', upWeb);

    function upWeb() {
        window.scroll(0, 0);
    }
}