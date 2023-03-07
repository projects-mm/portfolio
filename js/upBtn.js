const up = document.querySelector('.up');


export const Up = () => {
    
    // When windows scroll in cross axis is > 200 up button is displayed
    window.onscroll = function() {
        let y = window.scrollY;
        if (y > 200) {
            up.setAttribute('style', 'display: flex');
        } else {
            up.setAttribute('style', 'display: none')
        }
    }

    // Event listeners
    up.addEventListener('click', upWeb);

    // Functions
    function upWeb() {
        window.scroll(0, 0);
    }
}