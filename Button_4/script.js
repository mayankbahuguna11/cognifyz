function changeColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorButton").style.backgroundColor = randomColor;
  }
  