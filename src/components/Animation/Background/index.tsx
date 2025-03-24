import React, { useEffect, useRef } from 'react';

class Star {
  id: number;

  x: number;

  y: number;

  r: number;

  color: string;

  constructor(id: number, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 2) + 1;
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = `rgba(255,255,255,${alpha})`;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.r * 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  move(ctx: CanvasRenderingContext2D, params: { backgroundSpeed: number }, HEIGHT: number) {
    this.y -= 0.15 + params.backgroundSpeed / 100;
    if (this.y <= -10) this.y = HEIGHT + 10;
    this.draw(ctx);
  }
}

class Dot {
  id: number;

  x: number;

  y: number;

  r: number;

  speed: number;

  a: number;

  aReduction: number;

  color: string;

  dir: number;

  constructor(id: number, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 5) + 1;
    this.speed = 0.5;
    this.a = 0.5;
    this.aReduction = 0.005;
    this.color = `rgba(255,255,255,${this.a})`;
    this.dir = Math.floor(Math.random() * 140) + 200;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.r * 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  move(ctx: CanvasRenderingContext2D, dots: Dot[], params: { dotsSpeed: number }) {
    this.a -= this.aReduction;
    if (this.a <= 0) {
      this.die(dots);
    }

    this.color = `rgba(255,255,255,${this.a})`;
    this.x += Math.cos(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);
    this.y += Math.sin(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);

    this.draw(ctx);
  }

  die(dots: Dot[]) {
    const index = dots.findIndex((dot) => dot?.id === this.id);
    if (index !== -1) dots.splice(index, 1);
  }
}

function degToRad(deg: number): number {
  return deg * (Math.PI / 180);
}

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];
  const dots: Dot[] = [];
  const params = {
    maxDistFromCursor: 50,
    dotsSpeed: 0,
    backgroundSpeed: 0,
  };

  let WIDTH = window.innerWidth;
  let HEIGHT = window.innerHeight;
  let ctx: CanvasRenderingContext2D | null = null;
  let mouseMoving = false;
  let mouseMoveChecker: NodeJS.Timeout;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < 80; i++) {
      stars.push(new Star(i, Math.random() * WIDTH, Math.random() * HEIGHT));
    }

    animate();
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const setCanvasSize = () => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    if (canvasRef.current) {
      canvasRef.current.width = WIDTH;
      canvasRef.current.height = HEIGHT;
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    mouseMoving = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    clearTimeout(mouseMoveChecker);
    mouseMoveChecker = setTimeout(() => {
      mouseMoving = false;
    }, 150);
  };

  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    stars.forEach((star) => star.move(ctx!, params, HEIGHT));
    dots.forEach((dot) => dot.move(ctx!, dots, params));

    drawIfMouseMoving();
    requestAnimationFrame(animate);
  };

  const drawIfMouseMoving = () => {
    if (!mouseMoving) return;

    if (dots.length === 0) {
      dots.push(new Dot(0, mouseX, mouseY));
      dots[0].draw(ctx!);
      return;
    }

    const previousDot = dots[dots.length - 1];
    const diffX = Math.abs(previousDot.x - mouseX);
    const diffY = Math.abs(previousDot.y - mouseY);

    if (diffX < 2 || diffY < 2) return;

    const xVariation =
      (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor + 1);
    const yVariation =
      (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor + 1);

    const newDot = new Dot(dots.length, mouseX + xVariation, mouseY + yVariation);
    dots.push(newDot);
    newDot.draw(ctx!);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <canvas className="absolute top-0 left-0 w-full h-full -z-20" ref={canvasRef} />
    </div>
  );
};

export default CanvasBackground;
