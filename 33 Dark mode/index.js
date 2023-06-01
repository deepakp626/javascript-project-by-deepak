const imageEl = document.getElementById("image");
const bodyEl = document.getElementById("body");
const headingEl = document.getElementById("heading");
let mode = "white";
const changeMode = () => {
  if (mode == "white") {
    imageEl.src = "./images/lamp.png";
    document.body.classList.toggle("black");
    headingEl.classList.toggle("white-text");
    mode = "black";
  } else {
    imageEl.src = "./images/heart.png";
    document.body.classList.toggle("black");
    headingEl.classList.toggle("white-text");
    mode = "white";
  }
};
imageEl.addEventListener("click", changeMode);
