const penguin = document.getElementById("penguin");
console.log(penguin.style);
let rotation_val = 0;
penguin.style.transformOrigin = "translate(50%,50%)";
setInterval(() => {
  penguin.style.rotate = `${rotation_val}deg`;
  penguin.style.filter = `hue-rotate(${rotation_val}deg))`;
  if (Math.random() > 0.3) {
    rotation_val++;
  } else {
    rotation_val += 3;
  }
}, 5);

let initScale = 1;
penguin.addEventListener("mouseover", (e) => {
  if (Math.random() > 0.5) {
    initScale += 0.25;
  } else {
    initScale -=0.15;
  }
  penguin.style.scale = initScale;
});
