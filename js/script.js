// Updates the year
const copyrightYearEl = document.querySelector('.footer__year');
const currentYear = new Date().getFullYear();
copyrightYearEl.textContent = currentYear;
