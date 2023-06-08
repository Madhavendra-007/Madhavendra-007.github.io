function scrollEffect(){
const scrollPoints = document.querySelectorAll('.scrollPoints');
const sections = document.querySelectorAll('section');
const footerSection = document.querySelector('.footer-section'); // Assuming the footer section has a class of "footer-section"
let isScrolling = false;
let disableScroll = false;

window.addEventListener('scroll', debounce(() => {
  if (!isScrolling && !disableScroll) {
    isScrolling = true;
    let current = "";

    const viewportBottom = window.pageYOffset + window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (section === footerSection) {
        const footerTop = sectionTop - (window.innerHeight - sectionHeight);
        const footerBottom = sectionTop + sectionHeight;

        if (viewportBottom >= footerTop && viewportBottom <= footerBottom) {
          current = section.getAttribute('id');
          disableScroll = true;
          setTimeout(() => {
            disableScroll = true;
          }, 5000); // Adjust the duration (in milliseconds) for how long scrolling should be disabled
        }
      } else {
        if (pageYOffset >= sectionTop - 300 && pageYOffset <= sectionTop + sectionHeight - 300) {
          current = section.getAttribute('id');
        }
      }
    });

    scrollPoints.forEach(point => {
      if (point.classList.contains(current)) {
        activateScrollPoint(point);
      }
    });

    setTimeout(() => {
      isScrolling = false;
    }, 500); // Adjust the debounce delay (in milliseconds) to your desired value
  }
}, 70));

// Rest of the code...



function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function activateScrollPoint(point) {
  scrollPoints.forEach(otherPoint => {
    otherPoint.style.background = 'radial-gradient(0% 0%, #ffffff, #333)'; // all other points
  });

  point.style.background = 'radial-gradient(70% 70%, #dd6b0d 30%, #171717 60.08%)'; // change on target click 

  const index = Array.from(scrollPoints).indexOf(point);
  const associatedSection = sections[index];
  const sectionTop = associatedSection.offsetTop;

  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  });
}

scrollPoints.forEach((point, index) => {
  point.addEventListener('click', () => {
    const associatedSection = sections[index];
    const sectionTop = associatedSection.offsetTop;

    activateScrollPoint(point);
  });
});
}

if(window.matchMedia('(min-width: 850px)').matches)
{
  scrollEffect();
} 