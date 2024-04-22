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

