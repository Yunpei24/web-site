document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle pour mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Animation au défilement pour les éléments de la galerie
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Fonction pour animer les éléments visibles
    function animateVisibleElements() {
        galleryItems.forEach((item, index) => {
            if (isElementInViewport(item)) {
                item.style.animation = `fadeUp 0.6s forwards ${index % 3 * 0.2}s`;
            }
        });
    }
    
    // Exécuter l'animation au chargement et au défilement
    animateVisibleElements();
    window.addEventListener('scroll', animateVisibleElements);
    
    // Bouton "Voir plus"
    const loadMoreBtn = document.querySelector('.load-more');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simuler le chargement de plus d'images
            // Dans une implémentation réelle, vous pourriez charger plus d'images via AJAX
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement...';
            
            setTimeout(() => {
                // Réinitialiser le bouton après le "chargement"
                this.innerHTML = 'Voir plus de photos <i class="fas fa-chevron-down"></i>';
                
                // Faire défiler la page vers le bas pour montrer plus de contenu
                window.scrollBy({
                    top: 500,
                    behavior: 'smooth'
                });
            }, 1500);
        });
    }
    
    // Animation du header au défilement
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Défilement vers le bas
            header.style.transform = 'translateY(-100%)';
        } else {
            // Défilement vers le haut
            header.style.transform = 'translateY(0)';
        }
        
        // Changer l'apparence du header lors du défilement
        if (scrollTop > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Effet de zoom sur les images au survol
    const cardImages = document.querySelectorAll('.card-image');
    
    cardImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
