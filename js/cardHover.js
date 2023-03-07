const cards = document.querySelectorAll('.card');
const cardDetails = document.querySelector('.card-details');


export const CardHover = () => {


    //Event Listeners

    cards.forEach(card => {

        // When the mouse is on the card, the card details are displayed
        card.addEventListener('mouseover', () => {
            card.childNodes[3].classList.add('active');
        })

        // When the mouse is out of the card, the card details are disable
        card.addEventListener('mouseout', () => {
            card.childNodes[3].classList.remove('active');
        })

        // When the mobile mouse is on the card, the card details are displayed
        card.addEventListener('touchstart', () => {
            card.childNodes[3].classList.add('active');
        })

        // When the mobile mouse touch out of the card, the card details are disable
        window.addEventListener('touchstart', (e) => {
            if (card.contains(e.target)) {
                return;
            } else {
                card.childNodes[3].classList.remove('active');
            }
        });
    })
}