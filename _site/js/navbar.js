document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-Item" elements
  const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
  
  // Add a click event on each of them
  $navbarItems.forEach( el => {
    el.addEventListener('click', () => {
  
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);
  
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-selected');
      $target.classList.toggle('is-selected');
  
    });
  });  
});