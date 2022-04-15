// Updates the year
const copyrightYearEl = document.querySelector('.footer__year');
const currentYear = new Date().getFullYear();
copyrightYearEl.textContent = currentYear;

// Closes the nav
document.querySelector('.navigation__list').addEventListener('click', () => {
    document
        .querySelector('.navigation__button')
        .dispatchEvent(new MouseEvent('click'));
});
