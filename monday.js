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


window.addEventListener('DOMContentLoaded', function() {
  var boxes = document.querySelectorAll('.box');
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var footerHeight = document.querySelector('.footer').offsetHeight;
  var availableHeight = window.innerHeight - navbarHeight - footerHeight;
  
  boxes.forEach(function(box) {
    var randomX = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
    var randomY = Math.floor(Math.random() * (availableHeight - box.offsetHeight));
    box.style.left = randomX + 'px';
    box.style.top = navbarHeight + randomY + 'px';
  });
});


 function addToPay(price) {
      var walletAmount = 100; // Initial wallet amount
      var payAmount = price; // Use the provided price
      var paySection = document.querySelector('.footer .price');
      var walletSection = document.querySelector('.footer .order');

      // Update wallet amount
      walletAmount -= payAmount;

      // Update pay section
      paySection.textContent = "Pay: $" + payAmount;

      // Update wallet section
      walletSection.textContent = "Wallet: $" + walletAmount;
    }