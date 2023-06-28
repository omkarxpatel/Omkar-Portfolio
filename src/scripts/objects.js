// Get the container element
const container = document.getElementById('container');

// Create floating objects
for (let i = 1; i <= 3; i++) {
  const floatingObject = document.createElement('div');
  floatingObject.className = `floating-object floating-object-${i}`;
  container.appendChild(floatingObject);
}

// Function to update the position and direction of floating objects
function updateFloatingObjectPosition(floatingObject) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const floatingObjectWidth = floatingObject.offsetWidth;
  const floatingObjectHeight = floatingObject.offsetHeight;

  // Get the current position and direction of the floating object
  let { x, y, dx, dy } = floatingObject.dataset;

  // Convert the position and direction to numbers
  x = parseFloat(x);
  y = parseFloat(y);
  dx = parseFloat(dx);
  dy = parseFloat(dy);

  // Update the position based on the direction
  x += dx;
  y += dy;

  // Check if the floating object hits the container boundaries
  if (x < 0 || x + floatingObjectWidth > containerWidth) {
    dx = -dx; // Reverse the horizontal direction
  }
  if (y < 0 || y + floatingObjectHeight > containerHeight) {
    dy = -dy; // Reverse the vertical direction
  }

  // Update the position and direction in the dataset
  floatingObject.dataset.x = x;
  floatingObject.dataset.y = y;
  floatingObject.dataset.dx = dx;
  floatingObject.dataset.dy = dy;

  // Update the transform style property to move the floating object
  floatingObject.style.transform = `translate(${x}px, ${y}px)`;

  // Request the next animation frame to continue the animation
  requestAnimationFrame(() => updateFloatingObjectPosition(floatingObject));
}

// Start the animation for each floating object
const floatingObjects = document.querySelectorAll('.floating-object');
floatingObjects.forEach((floatingObject) => {
  // Initialize the position and direction in the dataset
  floatingObject.dataset.x = 0;
  floatingObject.dataset.y = 0;
  floatingObject.dataset.dx = Math.random() * 2 - 1; // Random horizontal direction between -1 and 1
  floatingObject.dataset.dy = Math.random() * 2 - 1; // Random vertical direction between -1 and 1

  // Start the animation
  updateFloatingObjectPosition(floatingObject);
});
