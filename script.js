document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const portfolioSection = document.querySelector('#Portfolio');

    function onScroll() {
        const portfolioRect = portfolioSection.getBoundingClientRect();
        const isInViewport = portfolioRect.top <= 0 && portfolioRect.bottom >= 0;
        
        if (isInViewport) {
            header.classList.add('blue-background');
        } else {
            header.classList.remove('blue-background');
        }
    }

    window.addEventListener('scroll', onScroll);
});