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

window.addEventListener('DOMContentLoaded', function() {
  var boxes = document.querySelectorAll('.box');
  var container = document.querySelector('.container');
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var footerHeight = document.querySelector('.footer').offsetHeight;
  var availableWidth = container.offsetWidth - 300; // Subtract box width
  var availableHeight = container.offsetHeight - navbarHeight - footerHeight; // Subtract navbar and footer height
  
  boxes.forEach(function(box) {
    var randomX = Math.floor(Math.random() * availableWidth);
    var randomY = Math.floor(Math.random() * availableHeight);
    box.style.left = randomX + 'px';
    box.style.top = navbarHeight + randomY + 'px';
  });
});



//the par function


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