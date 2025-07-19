const arrowLeft = document.getElementById('left-arrow'),
    arrowRight = document.getElementById('right-arrow'),
    storySlider = document.getElementById('story-slider');


// Scrolling of Story 
arrowLeft.addEventListener('click', () => {
    storySlider.scrollLeft -= 200;
    if (arrowLeft.scrollLeft == 0) {
        arrowLeft.classList.add('my-hidden');

    }
});

arrowRight.addEventListener('click', () => {
    storySlider.scrollLeft += 200;
    arrowLeft.classList.remove('my-hidden');
});


