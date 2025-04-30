// Toggle hidden content
const toggleBtn = document.getElementById('toggleBtn');
const moreInfo = document.getElementById('moreInfo');

toggleBtn.addEventListener('click', function() {
    moreInfo.classList.toggle('show');
    toggleBtn.textContent = moreInfo.classList.contains('show') ? 'Hide Details' : 'View Details';
});

// Contact button action
const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', function() {
    alert('Thank you for your interest! Please email me at sarah@example.com');
});

// Additional hover effect for skills
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    tag.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
