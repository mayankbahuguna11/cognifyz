document.getElementById("greetButton").onclick = function() {
    const hours = new Date().getHours();
    let greeting;
  
    if (hours < 12) {
      greeting = "Rise and Shine! Good Morning!";
    } else if (hours < 18) {
      greeting = "Good Afternoon! Keep up the great work!";
    } else {
      greeting = "Good Evening! Relax and unwind!";
    }
  
    alert(greeting);
  }
  