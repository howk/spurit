window.addEventListener("DOMContentLoaded", () => {
    const elems = document.querySelectorAll('.collapsible');

    const handleToggle = (event) => {
        const parent = event.target.closest(".collapsible");
        const content = parent.querySelector('.collapsible__content');
        const btnToggleLabelHide = parent.querySelector('.collapsible__action--visible');
        const btnToggleLabelShow = parent.querySelector('.collapsible__action--hidden');
        if (btnToggleLabelHide.style.display === 'none') {
            btnToggleLabelHide.style.display = 'block';
            btnToggleLabelShow.style.display = 'none';        
            content.animate([{ transform: 'scale(1, 1)', maxHeight: '1000px' }], {
                duration: 300,
                fill: 'forwards'
            });             
        } else {
            btnToggleLabelHide.style.display = 'none';
            btnToggleLabelShow.style.display = 'block';
            content.animate([{ transform: 'scale(1, 0)', maxHeight: 0 }], {
                duration: 300,
                fill: 'forwards'
            });            
        }
    }

    for (const collapsible of elems) {
        const btnToggle = collapsible.querySelector('.collapsible__button');
        const btnToggleLabelHide = btnToggle.querySelector('.collapsible__action--visible');
        const content = collapsible.querySelector('.collapsible__content');
        btnToggle.addEventListener('click', handleToggle);
        btnToggleLabelHide.style.display = 'none';
        // Initial content block hiding
        content.animate([{ transform: 'scale(1, 0)', maxHeight: 0 }], {
            duration: 0,
            fill: 'forwards'
        });
    }
});