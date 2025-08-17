// Scripts principales del sitio
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Tooltips para botones de compartir
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    if (window.bootstrap) {
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Animación de entrada para cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a las cards
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Contador de caracteres para textarea (si existe)
    const textarea = document.querySelector('textarea[data-counter]');
    if (textarea) {
        const counter = document.createElement('small');
        counter.className = 'text-muted d-block mt-1';
        textarea.parentNode.insertBefore(counter, textarea.nextSibling);

        function updateCounter() {
            const maxLength = textarea.getAttribute('maxlength') || 500;
            const currentLength = textarea.value.length;
            counter.textContent = `${currentLength}/${maxLength} caracteres`;

            if (currentLength > maxLength * 0.9) {
                counter.className = 'text-warning d-block mt-1';
            } else {
                counter.className = 'text-muted d-block mt-1';
            }
        }

        textarea.addEventListener('input', updateCounter);
        updateCounter();
    }
});

// Función para copiar URL al portapapeles
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('¡URL copiada al portapapeles!');
        });
    } else {
        // Fallback para navegadores más antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('¡URL copiada al portapapeles!');
    }
}

// Función para mostrar notificaciones toast
function showToast(message, type = 'success') {
    // Crear toast si no existe
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }

    // Crear toast
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;

    toastContainer.appendChild(toast);

    // Mostrar toast
    if (window.bootstrap) {
        const bsToast = new bootstrap.Toast(toast, { delay: 3000 });
        bsToast.show();

        // Eliminar toast después de que se oculte
        toast.addEventListener('hidden.bs.toast', function() {
            toast.remove();
        });
    }
}