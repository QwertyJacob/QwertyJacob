function toggleTemplate() {
    document.body.classList.toggle('formal');
    document.body.classList.toggle('sporty');
}

function generatePDF() {
    const element = document.body;
    const opt = {
        margin:       10,
        filename:     'cv.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

function toggleView() {
    document.body.classList.toggle('academic');
    document.body.classList.toggle('industrial');
    
    // Toggle skills section visibility
    const skillsSection = document.querySelector('#skills-section');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
    
    
    // Update button text
    const toggleButton = document.querySelector('#viewToggle');
    if (toggleButton) {
        toggleButton.textContent = document.body.classList.contains('academic') 
            ? 'Switch to Industrial' 
            : 'Switch to Academic';
    }
}