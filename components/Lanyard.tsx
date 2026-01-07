"use client";
import { useEffect, useRef } from "react"; // Hapus 'useState'
import Matter from "matter-js";
import Image from "next/image";

export default function Lanyard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !cardRef.current) return;

    // 1. Setup Engine
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Bodies = Matter.Bodies,
      Body = Matter.Body;

    const engine = Engine.create();
    const world = engine.world;

    // --- TUNING 1: Gravitasi ---
    // Ubah y jadi lebih kecil (misal 0.25) biar melayang "lightweight".
    // Kalau mau benar-benar melayang diam, set ke 0.
    engine.gravity.y = 0.3; 
    engine.gravity.x = 0;

    // 2. Setup Render
    const { clientWidth, clientHeight } = containerRef.current;
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: clientWidth,
        height: clientHeight,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      },
    });

    // 3. Membuat Objek
    const group = Body.nextGroup(true);
    const anchorX = clientWidth / 2;
    const anchorY = -10; // Titik gantung sedikit di atas layar

    // --- TUNING 2: Tali Lebih Pendek & Kaku ---
    // Ubah jumlah segmen (stack) dari 8 jadi 4 biar tali tidak kepanjangan
    const rope = Composites.stack(anchorX, anchorY, 4, 1, 10, 10, function(x: number, y: number) {
      return Bodies.rectangle(x, y, 10, 10, { 
        collisionFilter: { group: group },
        render: { visible: false } 
      });
    });

    Composites.chain(rope, 0.5, 0, -0.5, 0, { 
      stiffness: 0.9, // Lebih kaku
      length: 15,     // Jarak antar segmen
      render: { type: 'line', strokeStyle: '#8b5cf6', lineWidth: 4 }
    });

    // --- TUNING 3: Body Kartu Lebih Ringan & Licin ---
    const cardBody = Bodies.rectangle(anchorX, anchorY + 180, 220, 300, {
      collisionFilter: { group: group },
      chamfer: { radius: 20 },
      density: 0.002, // Lebih ringan (default biasanya lebih berat)
      frictionAir: 0.02, // Hambatan udara kecil -> berputar lebih lama saat disentil
      restitution: 0.5, // Sedikit memantul
      render: { visible: false }
    });

    // Koneksi Tali ke Kartu
    const lastRopeBody = rope.bodies[rope.bodies.length - 1];
    const connection = Constraint.create({
      bodyA: lastRopeBody,
      bodyB: cardBody,
      pointA: { x: 0, y: 0 },
      pointB: { x: 0, y: -130 }, // Titik tempel di atas kartu
      length: 10,
      stiffness: 1,
      damping: 0.1
    });

    // Pin ke Langit-langit
    const pin = Constraint.create({
      bodyB: rope.bodies[0],
      pointB: { x: 0, y: 0 },
      pointA: { x: anchorX, y: anchorY },
      stiffness: 1
    });

    Composite.add(world, [rope, cardBody, connection, pin]);

    // 4. Mouse Interaction
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1, // Tarikan mouse lebih lembut
        render: { visible: false }
      }
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // 5. Run
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 6. Sync HTML
    const updateCardPosition = () => {
      if (!cardRef.current) return;
      const { x, y } = cardBody.position;
      const angle = cardBody.angle;
      // Geser posisi div sesuai body fisika
      cardRef.current.style.transform = `translate(${x - 110}px, ${y - 150}px) rotate(${angle}rad)`;
      requestAnimationFrame(updateCardPosition);
    };
    updateCardPosition();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      if(render.canvas) render.canvas.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] overflow-hidden flex justify-center cursor-grab active:cursor-grabbing">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
      <div 
        ref={cardRef} 
        className="absolute top-0 left-0 w-[220px] h-[300px] z-20 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        {/* === KONTEN KARTU SAMA SEPERTI SEBELUMNYA === */}
        <div className="w-full h-full bg-[#111] rounded-[20px] border border-white/10 shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)] overflow-hidden relative flex flex-col pointer-events-none select-none">
          {/* Header */}
          <div className="h-24 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
          </div>
          {/* Gantungan */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/30 rounded-full blur-[1px]"></div>
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-4 h-8 bg-[#222] border border-white/20 rounded-full z-30"></div>
          {/* Foto */}
          <div className="relative w-28 h-28 mx-auto -mt-14 rounded-full border-4 border-[#111] overflow-hidden bg-gray-800">
             <Image src="/foto_kerja.jpg" alt="Winata Chen" fill className="object-cover" />
          </div>
          {/* Teks */}
          <div className="text-center mt-4 px-4">
            <h3 className="text-xl font-bold text-white">Winata Chen</h3>
            <p className="text-xs text-gray-400 font-mono mt-1">Informatics Student</p>
            <div className="mt-6 flex justify-center gap-2 opacity-60">
                <div className="w-32 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-black opacity-20"></div> {/* Barcode dummy */}
                </div>
            </div>
          </div>
          {/* Footer */}
          <div className="mt-auto bg-white/5 py-2 text-[10px] text-center text-gray-500 font-mono border-t border-white/5">
            ID: 2026-UMN-DEV
          </div>
        </div>
      </div>
    </div>
  );
}