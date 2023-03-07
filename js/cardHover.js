const cards = document.querySelectorAll('.card');
const cardDetails = document.querySelector('.card-details');


export const CardHover = () => {

    //Event Listeners

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.childNodes[3].classList.add('active');
        })

        card.addEventListener('mouseout', () => {
            card.childNodes[3].classList.remove('active');
        })

        card.addEventListener('touchstart', () => {
            card.childNodes[3].classList.add('active');
        })

        card.addEventListener('touchend', () => {
            card.childNodes[3].classList.remove('active');
        })
    })
    

    //Functions 
    function showDetails(e) {
        cardDetails.classList.add('active')
    }
    function closeDetails(e) {
        cardDetails.classList.remove('active')
    }
}