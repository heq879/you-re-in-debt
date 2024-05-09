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