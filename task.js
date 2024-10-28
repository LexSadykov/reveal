document.addEventListener('scroll', () => {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect();
      
      if (top < window.innerHeight && bottom > 0) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
  });
  