function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = modal.querySelector('.close');
    
    // Get all "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.project-card button');

    learnMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const projectCard = button.closest('.project-card');
            const title = projectCard.querySelector('h3').textContent;
            const image = projectCard.querySelector('img').src;
            const description = projectCard.querySelector('p').dataset.description;

            // Populate modal with project details
            modalTitle.textContent = title;
            modalImage.src = image;
            modalDescription.textContent = description;

            // Show the modal
            modal.style.display = 'block';
        });
    });

    // Close modal when "X" is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



