// Components/ParticleBackground/ParticleBackground.jsx
import React, { useEffect } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  useEffect(() => {
    const canvases = document.querySelectorAll('.particle-background'); // Select all canvases with the class
    canvases.forEach(canvas => {
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let mouseCoords = {
        x: undefined,
        y: undefined,
      };

      window.addEventListener("mousemove", (e) => {
        mouseCoords.x = e.x;
        mouseCoords.y = e.y;      
      });

      function Punto() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.floatX = Math.random() * 0.3 - 0.1;
        this.floatY = Math.random() * 0.3 - 0.1;
        this.color = randomColor();

        this.draw = function () {
          context.beginPath();
          context.fillStyle = this.color;
          context.arc(this.x, this.y, this.size, 0, 360);
          context.fill();
        }

        this.update = function () {
          if (this.x > canvas.width) this.x = -10;
          if (this.x < -20) this.x = canvas.width;
          if (this.y > canvas.height) this.y = -10;
          if (this.y < -20) this.y = canvas.height;

          this.x += this.floatX;
          this.y += this.floatY;
          this.draw();
        }
      }

      let puntos = [];
      for (let i = 0; i < 150; i++) puntos[i] = new Punto();

      function move() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        puntos.forEach(punto => {
          punto.update();
        });

        requestAnimationFrame(move);
      }

      move();

      function randomColor() {
        let random = Math.random() * 2; // Adjusting range to 2 for two colors
        if (random > 1) return "#ff7f50"; // Coral
        return "#ff4500"; // OrangeRed
      }
      
      // Resize canvas on window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', (e) => {
          mouseCoords.x = e.x;
          mouseCoords.y = e.y;      
        });
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []);

  return <canvas className="particle-background"></canvas>; // Use the class name
};

export default ParticleBackground;
