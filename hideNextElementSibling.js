
document.querySelectorAll('.title').forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const arrow = title.querySelector('.arrow');
        
        if (content.classList.contains('visible')) {
            content.classList.remove('visible');
            arrow.classList.remove('down');
            arrow.classList.add('right');
            setTimeout(() => { content.style.display = 'none'; }, 500); // Wait for the transition to complete
        } else {
            content.style.display = 'block';
            setTimeout(() => { content.classList.add('visible'); }, 10); // Slight delay to allow for display change
            arrow.classList.remove('right');
            arrow.classList.add('down');
        }
    });
});    