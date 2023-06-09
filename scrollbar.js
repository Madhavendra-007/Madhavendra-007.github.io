const scrollPoints = document.querySelectorAll('.scrollPoints');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  scrollPoints.forEach(point => {
    if (point.classList.contains(current)) {
      activateScrollPoint(point);
    }
  });
});

function activateScrollPoint(point) {
  scrollPoints.forEach(otherPoint => {
    otherPoint.style.background = 'radial-gradient(0% 0%, #ffffff, #333)'; // all other points
  });

  point.style.background = 'radial-gradient(70% 70%, #dd6b0d 30%, #171717 60.08%)'; // change on target click 
}

scrollPoints.forEach((point, index) => {
  point.addEventListener('click', () => {
    const associatedSection = sections[index];
    const sectionTop = associatedSection.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });


  });
});
