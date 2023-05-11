const button = document.getElementById("button1");
let rotationAngle = 0;

button.addEventListener("click", function() {
  rotationAngle += 90;
  button.style.transform = `rotate(${rotationAngle}deg)`;
});