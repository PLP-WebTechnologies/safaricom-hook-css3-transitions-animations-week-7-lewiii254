// calculate the area of a rectangle
function calculateArea(width, height) {
    return width * height;
  }
  
  // Function to demonstrate scope
  function scopeExample() {
    let localVariable = "I'm local!";
    console.log(localVariable);
  }
  
  // Toggle spinner animation
  function toggleSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.classList.toggle('hidden');
  }
  
  // Event listener for calculating area
  const calculateButton = document.getElementById('calculateArea');
  calculateButton.addEventListener('click', () => {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(width) || isNaN(height)) {
      document.getElementById('result').textContent = "Please enter valid numbers.";
      return;
    }
  
    const area = calculateArea(width, height);
    document.getElementById('result').textContent = `Area: ${area}`;
  });
  
    // Event listener for toggling spinner
  const colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', toggleSpinner);
  
  
  scopeExample();
  