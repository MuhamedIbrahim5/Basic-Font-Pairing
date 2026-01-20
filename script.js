// Font options data
const fontOptions = {
    option1: {
        name: 'Montserrat + Open Sans',
        desc: 'Modern & Professional',
        heading: 'Montserrat',
        body: 'Open Sans'
    },
    option2: {
        name: 'Poppins + Roboto',
        desc: 'Clean & Elegant',
        heading: 'Poppins',
        body: 'Roboto'
    },
    option3: {
        name: 'Playfair Display + Lato',
        desc: 'Classic & Readable',
        heading: 'Playfair Display',
        body: 'Lato'
    }
};

// Get elements
const fontButtons = document.querySelectorAll('.font-btn');
const fontName = document.getElementById('font-name');
const fontDesc = document.getElementById('font-desc');
const body = document.body;

// Set initial font
body.classList.add('option1');

// Add click event to buttons
fontButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        fontButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get selected font option
        const selectedFont = this.getAttribute('data-font');
        
        // Remove all font classes from body
        body.classList.remove('option1', 'option2', 'option3');
        
        // Add selected font class
        body.classList.add(selectedFont);
        
        // Update font info
        fontName.textContent = fontOptions[selectedFont].name;
        fontDesc.textContent = fontOptions[selectedFont].desc;
        
        // Add animation effect
        const preview = document.querySelector('.content-preview');
        preview.style.opacity = '0';
        setTimeout(() => {
            preview.style.opacity = '1';
        }, 100);
    });
});

// Add smooth transition
document.querySelector('.content-preview').style.transition = 'opacity 0.3s ease';

console.log('Font Pairing Demo Ready!');
console.log('Created by Mohamed Ibrahim');
