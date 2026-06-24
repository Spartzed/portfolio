'use client';

import {useEffect, useRef} from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface MousePos {
  x: number;
  y: number;
}

export function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<MousePos>({x: -1000, y: -1000});
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to viewport only (fixed position)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {x: e.clientX, y: e.clientY};
    };

    const handleMouseLeave = () => {
      mouseRef.current = {x: -1000, y: -1000};
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize nodes - density based on viewport size
    const nodeCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    nodesRef.current = nodes;

    // Mouse interaction radius
    const mouseRadius = 180;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      const nodeColor = isDark ? 'rgba(74, 222, 128,' : 'rgba(34, 197, 94,';
      const glowColor = isDark ? 'rgba(74, 222, 128, 0.15)' : 'rgba(34, 197, 94, 0.1)';
      const mouseColor = isDark ? 'rgba(74, 222, 128,' : 'rgba(34, 197, 94,';

      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;

      // Draw mouse glow
      if (mouse.x > -500) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouseRadius
        );
        mouseGradient.addColorStop(0, `${mouseColor} 0.08)`);
        mouseGradient.addColorStop(0.5, `${mouseColor} 0.03)`);
        mouseGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fillStyle = mouseGradient;
        ctx.fill();
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Calculate distance to mouse
        const dxMouse = node.x - mouse.x;
        const dyMouse = node.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        // Gentle repulsion from mouse
        if (distMouse < mouseRadius * 0.6) {
          const force = (mouseRadius * 0.6 - distMouse) / (mouseRadius * 0.6);
          const angle = Math.atan2(dyMouse, dxMouse);
          node.vx += Math.cos(angle) * force * 0.02;
          node.vy += Math.sin(angle) * force * 0.02;
        }

        // Apply some damping to velocity
        node.vx *= 0.999;
        node.vy *= 0.999;

        // Keep minimum movement
        const currentSpeed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (currentSpeed < 0.1) {
          node.vx += (Math.random() - 0.5) * 0.02;
          node.vy += (Math.random() - 0.5) * 0.02;
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges instead of bouncing (smoother)
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Pulsing radius - enhanced near mouse
        node.pulsePhase += node.pulseSpeed;
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 1;
        const mouseBonus = distMouse < mouseRadius ? (1 - distMouse / mouseRadius) * 0.5 : 0;
        const currentRadius = node.radius * (pulse + mouseBonus);

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentRadius * 4
        );
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw node - brighter near mouse
        const brightness = 0.8 + (distMouse < mouseRadius ? (1 - distMouse / mouseRadius) * 0.2 : 0);
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor} ${brightness})`;
        ctx.fill();

        // Connect to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Handle wrap-around distance (toroidal topology)
          const dxWrapped = Math.min(dx, canvas.width - Math.abs(dx));
          const dyWrapped = Math.min(dy, canvas.height - Math.abs(dy));
          const distanceWrapped = Math.sqrt(dxWrapped * dxWrapped + dyWrapped * dyWrapped);

          if (distanceWrapped < 200) {
            const opacity = (1 - distanceWrapped / 200) * 0.4;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);

            // Draw line considering wrap-around
            if (distanceWrapped < distance) {
              // Use wrapped connection
              const wrapX = dxWrapped !== Math.abs(dx) ? (dx > 0 ? canvas.width : 0) : other.x;
              const wrapY = dyWrapped !== Math.abs(dy) ? (dy > 0 ? canvas.height : 0) : other.y;
              ctx.lineTo(wrapX, other.y);
            } else {
              ctx.lineTo(other.x, other.y);
            }

            ctx.strokeStyle = `${nodeColor} ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw special connection to mouse
        if (mouse.x > -500 && distMouse < mouseRadius) {
          const opacity = (1 - distMouse / mouseRadius) * 0.6;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `${mouseColor} ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Add flowing data packets along connections
      const packetCount = 12;
      for (let i = 0; i < packetCount; i++) {
        const nodeA = nodes[Math.floor(Math.random() * nodes.length)];
        const nodeB = nodes[Math.floor(Math.random() * nodes.length)];

        const dx = Math.abs(nodeA.x - nodeB.x);
        const dy = Math.abs(nodeA.y - nodeB.y);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200 && distance > 30) {
          const progress = (time * 0.5 + i * 0.5) % 1;
          const packetX = nodeB.x + (nodeA.x - nodeB.x) * progress;
          const packetY = nodeB.y + (nodeA.y - nodeB.y) * progress;

          // Draw data packet
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${nodeColor} ${0.9 + Math.sin(time * 3 + i) * 0.1})`;
          ctx.fill();

          // Glow around packet
          const packetGradient = ctx.createRadialGradient(
            packetX, packetY, 0,
            packetX, packetY, 8
          );
          packetGradient.addColorStop(0, `${nodeColor} 0.4)`);
          packetGradient.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(packetX, packetY, 8, 0, Math.PI * 2);
          ctx.fillStyle = packetGradient;
          ctx.fill();
        }
      }

      // Draw mouse cursor highlight
      if (mouse.x > -500) {
        const cursorPulse = Math.sin(time * 3) * 0.2 + 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4 * cursorPulse, 0, Math.PI * 2);
        ctx.fillStyle = `${mouseColor} 0.9)`;
        ctx.fill();

        const cursorGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 15 * cursorPulse
        );
        cursorGlow.addColorStop(0, `${mouseColor} 0.3)`);
        cursorGlow.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 15 * cursorPulse, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-60"
      style={{mixBlendMode: 'screen'}}
    />
  );
}
