const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.background = randomBg();
});

function randomBg() {
  /*  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`; */
    /* HSL is like rgb, but different */
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
