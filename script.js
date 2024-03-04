window.onload = function() {
    const sidebarLinks = document.querySelectorAll('.navlist a');
    const mainFrame = document.querySelector('.main');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            fetch(page)
                .then(response => response.text())
                .then(html => {
                    mainFrame.innerHTML = html;
                });
        });
    });
};
