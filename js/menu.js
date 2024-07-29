document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.toggle_btn');
  const dropDownMenu = document.querySelector('.dropdown_menu');
  const links = document.querySelectorAll('.nav-link');

  if (toggleBtn) {
    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open');
    };
  }

  const currentPath = window.location.pathname;
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
