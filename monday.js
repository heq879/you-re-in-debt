//the order time 
function updateOrderTime() {
    var orderTimeElement = document.getElementById('order-time');
    var currentDate = new Date();
    var year = currentDate.getFullYear().toString();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 as getMonth() returns zero-based month index
    var day = currentDate.getDate().toString().padStart(2, '0');
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');
    var currentTime = year + month + day + hours + minutes + seconds;
    orderTimeElement.innerText = currentTime;
}

setInterval(updateOrderTime, 1000);


//the boxes
document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById('grid'); // Get the grid container with id "grid"

  let isDragging = false;
  let offsetX, offsetY;
  let textDisplayCount = 0;

  document.querySelectorAll(".box").forEach(box => {
    const randomX = Math.random() * (window.innerWidth - 50); // Adjust 50 to box width
    const randomY = Math.random() * (window.innerHeight - 150); // Adjust 150 to total box height + footer height
    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;

    // Extract auto-pay value from addToPay function call
    const autoPay = parseInt(box.querySelector('button').getAttribute('onclick').match(/\d+/)[0]);

    // Add click event listener to each box
    box.addEventListener('click', function() {
      // Create a new div element to display the text content
      const textDisplay = document.createElement('div');
      textDisplay.classList.add('text-display');
      textDisplay.textContent = box.textContent.trim(); // Get and trim the text content of the box
      
      // Set grid column for text display
      textDisplay.style.gridColumn = '1'; // Set grid column 1
      
      // Display the auto-pay value beside the text display
      const autoPayDisplay = document.createElement('span');
      autoPayDisplay.classList.add('auto-pay');
      autoPayDisplay.textContent = `(${autoPay})`;
      
      // Set grid column for auto-pay display
      autoPayDisplay.style.gridColumn = '4 / span 1'; // Set grid column 4, span 1

      // Append textDisplay and autoPayDisplay to the same container
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.appendChild(textDisplay);
      gridItem.appendChild(autoPayDisplay);
      
      // Append the gridItem to the grid container
      gridContainer.appendChild(gridItem);
    });

    // Add mouse down event listener to each box
    box.addEventListener('mousedown', function(e) {
      isDragging = true;
      offsetX = e.clientX - box.getBoundingClientRect().left;
      offsetY = e.clientY - box.getBoundingClientRect().top;
    });

    // Add mouse move event listener to each box
    box.addEventListener('mousemove', function(e) {
      if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        box.style.left = `${newX}px`;
        box.style.top = `${newY}px`;
      }
    });

    // Add mouse up event listener to each box
    box.addEventListener('mouseup', function() {
      isDragging = false;
    });

    // Add mouse leave event listener to each box
    box.addEventListener('mouseleave', function() {
      isDragging = false;
    });
  });
});



//the pay function


 var totalPayAmount = 0;

    function addToPay(price) {
      var walletSection = document.querySelector('.footer .order');
      var paySection = document.querySelector('.footer .price');

      // Get the current wallet amount
      var walletText = walletSection.textContent;
      var walletAmount = parseFloat(walletText.split('$')[1]);

      // Subtract the price from the wallet amount
      walletAmount -= price;

      // Update wallet section
      walletSection.textContent = "Wallet: $" + walletAmount;

      // Add the price to the total pay amount
      totalPayAmount += price;

      // Update pay section with the total pay amount
      paySection.textContent = "Pay: $" + totalPayAmount;
    }