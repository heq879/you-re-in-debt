 window.addEventListener('DOMContentLoaded', function() {
      var boxes = document.querySelectorAll('.box');
      boxes.forEach(function(box) {
        var randomX = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight));
        box.style.left = randomX + 'px';
        box.style.top = randomY + 'px';
      });
    });