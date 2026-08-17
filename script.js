// Ultra-lightweight interaction script (~0.5 KB)
document.addEventListener('DOMContentLoaded', () => {
  
  // Close navigation menu automatically on click (mobile UX)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.nav-links');
      if (nav) nav.classList.remove('active');
    });
  });

  // Simple image lightbox placeholder
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      // Opens full photo in a clean browser tab without heavy modal libraries
      window.open(img.src, '_blank');
    });
  });

});
