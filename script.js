function updateOrderTime() {
    var orderTimeElement = document.getElementById('order-time');
    var currentDate = new Date();
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');
    var currentTime = hours + ":" + minutes + ":" + seconds;
    orderTimeElement.innerText = currentTime;
}

// Update order time every second
setInterval(updateOrderTime, 1000);
