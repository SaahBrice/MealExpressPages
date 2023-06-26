// Add active class to the clicked sidebar item
const sidebarItems = document.querySelectorAll('.sidebar li a');

sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    sidebarItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});