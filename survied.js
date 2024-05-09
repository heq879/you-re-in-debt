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
function generateBox(content, imageUrl) {
    // Create a new box element
    var newBox = document.createElement("div");
    newBox.classList.add("box");

    // Set random position
    var xPosition = Math.random() * (window.innerWidth - 220); // Adjust for box width
    var yPosition = Math.random() * (window.innerHeight - 220); // Adjust for box height
    newBox.style.left = xPosition + "px";
    newBox.style.top = yPosition + "px";

    // Create text element
    var textElement = document.createElement("span");
    textElement.textContent = content;
    newBox.appendChild(textElement);

    // Create img element
    var img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    newBox.appendChild(img);

    // Append the new box to the body
    document.body.appendChild(newBox);
}