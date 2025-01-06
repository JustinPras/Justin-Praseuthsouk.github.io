// Smooth scrolling on button click
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
});

// Trigger the fade-in effect when the content enters the viewport
document.addEventListener('scroll', function() {
    const content = document.getElementById('content');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; 

    if (contentPosition < screenPosition) {
        content.classList.add('visible'); // Apply the fade-in effect
    }
});
