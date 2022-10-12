import type { Plugin } from "$fresh/server.ts";

const name = "click-animation";
const main = `data:application/javascript,const circleSize = 15;
const lifetime = 1;

function drawCircle(x, y) {
  const circle = document.createElement("div");
  circle.style.position = "absolute";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circle.style.width = circleSize + "px";
  circle.style.height = circleSize + "px";
  circle.style.backgroundColor = "grey";
  circle.style.opacity = "0.2";
  circle.style.animation = "ripple " + lifetime + "s ease-out";
  circle.style.borderRadius = "50px";
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

export default function (state) {}`;

export default function clickAnimation(): Plugin {
  return {
    name,
    entrypoints: { main },
    render(ctx) {
      ctx.render();
      return {
        scripts: [{ id: name, entrypoint: "main", state: "" }],
        styles: [{
          cssText: `@keyframes ripple {
            from {
              opacity: 0.3;
              transform: scale(0);
            }
            to {
              opacity: 0;
              transform: scale(2);
            }
          }`,
          id: name,
        }],
      };
    },
  };
}
