$(function () {
    $("#header").load("header.html", function () {
        $("#header").hide().fadeIn();
    });
    $("#footer").load("footer.html", function () {
        $("#footer").hide().fadeIn();
    });
});
function showPage(pageId) {
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            document.getElementById(pageId).classList.add('active');
            
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.getElementById('nav-' + pageId).classList.add('active');
            
            window.scrollTo(0, 0);
            
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            showPage('inicio');
            
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });
        
        const colorBoxes = document.querySelectorAll('input[name="color-choice"]');
        const colorDisplay = document.getElementById('selectedColorDisplay');
        const customPicker = document.getElementById('customColorPicker');

        colorBoxes.forEach(box => {
            box.addEventListener('change', () => {
            colorDisplay.style.backgroundColor = box.value;
            });
        });

        customPicker.addEventListener('input', () => {
            colorDisplay.style.backgroundColor = customPicker.value;
        });

        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                this.reset();
            });
        });

        const colorRadios = document.querySelectorAll('input[name="color-choice"]');
        const colorSpan = document.getElementById('colorSeleccionado');

        colorRadios.forEach(radio => {
            radio.addEventListener('change', () => {
            colorSpan.textContent = radio.value;
            });
        });

        const modelo3D = document.getElementById('modeloSeleccionado');
        const productoInfo = document.getElementById('productoInfo');
        const colorInfo = document.getElementById('colorInfo');
        const texturaInfo = document.getElementById('texturaInfo');

        document.querySelectorAll('input[name="producto"]').forEach(radio => {
            radio.addEventListener('change', () => {
            modelo3D.textContent = radio.value;
            productoInfo.textContent = radio.value;
            });
        });

        document.querySelectorAll('input[name="color"]').forEach(radio => {
            radio.addEventListener('change', () => {
            colorInfo.textContent = radio.value;
            });
        });

        document.querySelectorAll('input[name="textura"]').forEach(radio => {
            radio.addEventListener('change', () => {
            texturaInfo.textContent = radio.value;
            });
        });



        
    