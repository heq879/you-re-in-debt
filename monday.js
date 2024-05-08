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
  const container = document.getElementById('container');

  document.querySelectorAll(".box").forEach(box => {
    const randomX = Math.random() * (window.innerWidth - 50); // Adjust 50 to box width
    const randomY = Math.random() * (window.innerHeight - 150); // Adjust 150 to total box height + footer height
    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;

    let isDragging = false;
    let offsetX, offsetY;

    // Function to handle mouse down event
    function handleMouseDown(event) {
      isDragging = true;
      offsetX = event.clientX - parseFloat(box.style.left);
      offsetY = event.clientY - parseFloat(box.style.top);
    }

    // Function to handle mouse move event
    function handleMouseMove(event) {
      if (isDragging) {
        box.style.left = `${event.clientX - offsetX}px`;
        box.style.top = `${event.clientY - offsetY}px`;
      }
    }

    // Function to handle mouse up event
    function handleMouseUp() {
      isDragging = false;
    }

    // Add mousedown event listener to start dragging
    box.addEventListener('mousedown', handleMouseDown);

    // Add mousemove event listener to move the box
    document.addEventListener('mousemove', handleMouseMove);

    // Add mouseup event listener to stop dragging
    document.addEventListener('mouseup', handleMouseUp);

    // Prevent text selection while dragging
    box.addEventListener('mousedown', function(event) {
      event.preventDefault();
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