function generateBox() {
    // Create a new box element
    var newBox = document.createElement("div");
    newBox.classList.add("box");

    // Set random position
    var xPosition = Math.random() * (window.innerWidth - 120); // Adjust for box width
    var yPosition = Math.random() * (window.innerHeight - 120); // Adjust for box height
    newBox.style.left = xPosition + "px";
    newBox.style.top = yPosition + "px";

    // Append the new box to the body
    document.body.appendChild(newBox);
}