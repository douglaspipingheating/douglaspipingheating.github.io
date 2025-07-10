document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('h3-contact');
    const footer = document.getElementById('footer');

    contactButton.addEventListener('click', function () {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
  });


