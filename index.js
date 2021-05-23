var images = [
  "/1-2.jpeg",
  "/2-3.jpg",
  "/3-2.jpg",
  "/4.jpg",
  "/5.jpeg",
  "/6.jpg",
  "/7.jpeg",
  "/8.jpeg",
  "/9.jpg",
  "/10.jpg",
];

function change() {
  var random = Math.floor(Math.random() * images.length);
  document.getElementById("image").src = images[random];
}

height.onchange = function () {
  image.style.height = this.value + "px";
};
width.onchange = function () {
  image.style.width = this.value + "px";
};

border.onchange = function () {
  document.getElementById("image").border = border.value;
  document.getElementById("image").style.borderColor = "red";
};
