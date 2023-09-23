// Scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Fix the assignment operator here
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => { // Change 'links' to 'link' here
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Fix the typo 'hred' to 'href'
    }
  });
};
