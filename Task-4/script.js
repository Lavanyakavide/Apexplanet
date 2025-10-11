// Handle tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-section');

// Add click event to each button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and sections
    tabButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add 'active' to clicked button and target section
    button.classList.add('active');
    const target = document.getElementById(button.dataset.target);
    target.classList.add('active');
  });
});

// Optional: Smooth fade effect when switching
sections.forEach(section => {
  section.addEventListener('transitionend', () => {
    section.style.opacity = 1;
  });
});
