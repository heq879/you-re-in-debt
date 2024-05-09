  document.addEventListener("DOMContentLoaded", function() {
    const textMenu = document.querySelector('.text-menu');

    // Function to generate a box
    function generateBox() {
      const box = document.createElement('div');
      box.classList.add('box');
      document.body.appendChild(box);
    }

    // Add click event listener to each text element
    textMenu.querySelectorAll('br').forEach(br => {
      br.addEventListener('click', generateBox);
    });
  });