import { useEffect } from "react";
import useModal from "../hooks/useModal";
import Modal from "./Modal";

export default function Timeline() {
  useEffect(() => {
    const c = document.getElementById("myCanvas") as HTMLCanvasElement;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    const ctx = c.getContext("2d");
    if (!ctx) throw new Error("null canvas context");

    ctx.lineWidth = 15;
    ctx.moveTo(0, c.height / 2);
    ctx.lineTo(c.width, c.height / 2);
    ctx.stroke();

    c.onmousemove = function (e: MouseEvent) {
      ctx.clearRect(0, 0, c.width, c.height); // clear entire canvas
      ctx.beginPath();

      ctx.moveTo(0, c.height / 2);
      ctx.lineTo(c.width, c.height / 2);
      ctx.stroke();

      const node = e.target as HTMLElement;
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (ctx.isPointInStroke(x, y)) {
        ctx.moveTo(x + 10, y);
        ctx.arc(x, /* make it snap: */ c.height / 2, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        c.style.cursor = "pointer";
      } else {
        c.style.cursor = "default";
      }
    };

    c.onclick = function (e: MouseEvent) {
      const node = e.target as HTMLElement;
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!ctx.isPointInStroke(x, y)) return;

      console.log("hey!");
      toggle();
    };
  });

  const { isOpen, toggle } = useModal();

  return (
    <div>
      <canvas
        id="myCanvas"
        width="200"
        height="100"
        style={{ border: "1px solid #d3d3d3" }}
      />
      <Modal isOpen={isOpen} toggle={toggle}></Modal>;
    </div>
  );
}
