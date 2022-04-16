// Updates the year
const copyrightYearEl = document.querySelector('.footer__year');
const currentYear = new Date().getFullYear();
copyrightYearEl.textContent = currentYear;

// Closes the nav
document.querySelector('.navigation__list').addEventListener('click', () => {
    document
        .querySelector('.navigation__button')
        .dispatchEvent(new PointerEvent('click'));
});

//Closes the popup when hitting outside it
const popupCloseButton = document.querySelector('.popup__close');
document.querySelector('.popup').addEventListener('click', (event) => {
    if (event.target.className === 'popup') {
        popupCloseButton.dispatchEvent(new PointerEvent('click'));
    }
});
