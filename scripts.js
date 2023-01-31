const border = document.querySelector(".border");
let hue = 0;

setInterval(() => {
  border.style.borderTopColor = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360;
}, 10);
