const circleSize = 20;
const lifetime = 1.2;

function drawCircle(x, y) {
  const circle = document.createElement("div");
  circle.style.position = "absolute";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circle.style.borderRadius = "50%";
  circle.style.width = circleSize + "px";
  ircle.style.height = circleSize + "px";
  circle.style.backgroundColor = "grey";
  circle.style.opacity = "0.2";
  circle.style.animation = "ripple " + lifetime + "s ease-out";
  document.body.appendChild(circle);
  setTimeout(() => {
    document.body.removeChild(circle);
  }, lifetime * 1000);
}

globalThis.addEventListener("mouseup", (e) => {
  drawCircle(e.clientX - (circleSize / 2), e.clientY - (circleSize / 2));
});

globalThis.addEventListener("touchend", (e) => {
  for (const touch of e.touches) {
    drawCircle(
      touch.clientX - (circleSize / 2),
      touch.clientY - (circleSize / 2),
    );
  }
});

export default function () {}
