function generateBox(content) {
    // Create a new box element
    var newBox = document.createElement("div");
    newBox.classList.add("box");

    // Set random position
    var xPosition = Math.random() * (window.innerWidth - 120);
    var yPosition = Math.random() * (window.innerHeight - 120);
    newBox.style.left = xPosition + "px";
    newBox.style.top = yPosition + "px";

    // Set content
    newBox.textContent = content;

    // Append the new box to the body
    document.body.appendChild(newBox);
}