const cards = document.querySelectorAll('.card');
const cardDetails = document.querySelector('.card-details');


export const CardHover = () => {

    //Event Listeners
    cards.forEach(card => {
        card.addEventListener('mouseover', (e) => {
            card.childNodes[3].classList.add('active');
        })
    })
    cards.forEach(card => {
        card.addEventListener('mouseout', (e) => {
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