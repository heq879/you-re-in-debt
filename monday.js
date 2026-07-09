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
  const boxes = document.querySelectorAll(".box");
  let isDragging = false;
  let offsetX, offsetY;

  boxes.forEach(box => {
    const randomX = Math.random() * (window.innerWidth - 50); // Adjust 50 to box width
    const randomY = Math.random() * (window.innerHeight - 150); // Adjust 150 to total box height + footer height
    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;

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
  var walletSection = document.querySelector('.footer .wallet');
  var paySection = document.querySelector('.footer .pay');
  var img = document.querySelector('.footer img'); // Get the image element

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

  // Check if total pay amount exceeds 100
  if (totalPayAmount > 100) {
    // Change the image source
    img.src = "assets/images/died.png";
    // Link the image to die.html
    img.parentElement.href = "die.html";
  }
}


