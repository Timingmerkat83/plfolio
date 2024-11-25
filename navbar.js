document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });

  const links = document.querySelectorAll('.collapsible-body li a');
links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelector('a[href="#projects"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });

window.add