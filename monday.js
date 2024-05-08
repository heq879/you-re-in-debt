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

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const footerHeight = document.querySelector(".footer").clientHeight;

  function getRandomPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const boxWidth = 300;
    const boxHeight = 300;
    const maxTop = windowHeight - footerHeight - boxHeight;
    const maxLeft = windowWidth - boxWidth;
    const top = Math.floor(Math.random() * maxTop);
    const left = Math.floor(Math.random() * maxLeft);
    return { top, left };
  }

  function createBox() {
    const box = document.createElement("div");
    box.className = "box";
    const { top, left } = getRandomPosition();
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.innerText = "Box";
    container.appendChild(box);
  }

  for (let i = 0; i < 5; i++) {
    createBox();
  }
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