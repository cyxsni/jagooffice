window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    const scaleValue = 1 + scrollPosition / 1000; // Mengatur kecepatan zoom, semakin kecil nilainya semakin lambat zoomnya
    
    // Menerapkan transformasi parallax dan zoom
    parallax.style.transform = `translate3d(0, ${scrollPosition * 0.2}px, 0) scale(${scaleValue})`;
  });

  

  