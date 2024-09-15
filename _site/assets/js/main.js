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