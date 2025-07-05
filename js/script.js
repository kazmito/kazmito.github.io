document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selections ---
    const shiftWrapper = document.querySelector('.shift-wrapper');
    const pageContent = document.querySelector('.page-content');
    const imagePreview = document.querySelector('.project-image-preview');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Using individual button selectors as requested
    const homeButton = document.querySelector('a[href="#home"]');
    const aboutButton = document.querySelector('a[href="#about"]');
    const projectsButton = document.querySelector('a[href="#projects"]');
    const contactButton = document.querySelector('a[href="#contact"]');

    // --- State Management ---
    let activePage = document.querySelector('.page.active');

    // --- Core Functions for Animation and Page Visibility ---
    function shift() {
        if (shiftWrapper.classList.contains('shifted') || shiftWrapper.classList.contains('is-transitioning')) return;
        shiftWrapper.classList.add('is-transitioning');
        shiftWrapper.classList.add('shifted');
        shiftWrapper.addEventListener('transitionend', () => shiftWrapper.classList.remove('is-transitioning'), { once: true });
    }

    function unshift() {
        if (!shiftWrapper.classList.contains('shifted') || shiftWrapper.classList.contains('is-transitioning')) return;
        shiftWrapper.classList.add('is-transitioning');
        shiftWrapper.classList.remove('shifted');
        shiftWrapper.addEventListener('transitionend', () => shiftWrapper.classList.remove('is-transitioning'), { once: true });
    }
    
    function showPageBubble(pageId) {
        if (activePage) {
            activePage.classList.remove('active');
        }
        const newPage = document.getElementById(pageId);
        if (newPage) {
            pageContent.classList.add('visible');
            newPage.classList.add('active');
            activePage = newPage;
        }
    }

    function hidePageBubbles() {
        if (activePage) {
            activePage.classList.remove('active');
            activePage = null;
        }
        pageContent.classList.remove('visible');
    }

    function setClass(elementSelector) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        const targetElement = document.querySelector(elementSelector);
        if (targetElement) {
            targetElement.classList.add('active');
        }
    }

    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (aboutButton.classList.contains('active')) return;
        
        shift();
        showPageBubble('about-page');
        setClass('a[href="#about"]');
        granimInstance.changeState('about-state');
    });

    projectsButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectsButton.classList.contains('active')) return;

        shift();
        showPageBubble('projects-page');
        setClass('a[href="#projects"]');
        granimInstance.changeState('projects-state');
    });

    contactButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactButton.classList.contains('active')) return;

        shift();
        showPageBubble('contact-page');
        setClass('a[href="#contact"]');
        granimInstance.changeState('contact-state');
    });

    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (homeButton.classList.contains('active')) return;
        
        unshift();
        hidePageBubbles();
        setClass('a[href="#home"]');
        granimInstance.changeState('default-state');
    });

    if (imagePreview && projectItems.length > 0) {
        const moveImage = (e) => {
            imagePreview.style.left = `${e.clientX}px`;
            imagePreview.style.top = `${e.clientY}px`;
        };
        projectItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const imageUrl = item.getAttribute('data-image');
                imagePreview.style.backgroundImage = `url(${imageUrl})`;
                imagePreview.style.display = 'block';
                setTimeout(() => { imagePreview.style.opacity = '1'; }, 10);
                document.addEventListener('mousemove', moveImage);
            });
            item.addEventListener('mouseleave', () => {
                imagePreview.style.opacity = '0';
                setTimeout(() => { imagePreview.style.display = 'none'; }, 300);
                document.removeEventListener('mousemove', moveImage);
            });
        });
    }
});
