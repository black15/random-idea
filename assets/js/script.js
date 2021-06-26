let menuTgl = document.querySelector('.toggle'),
    banner = document.querySelector('.banner');

menuTgl.addEventListener('click',function() {
  banner.classList.toggle('active');
  menuTgl.classList.toggle('active');
})
