import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Navbar.css";

const BULB_COLORS = [
  "#a855f7","#e879f9","#7c3aed","#c026d3","#d946ef",
  "#9333ea","#f0abfc","#6d28d9","#e879f9","#a855f7",
  "#7c3aed","#c026d3","#d946ef","#9333ea","#a855f7",
];

const Navbar = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.5 + 0.2),
      alpha: Math.random(),
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,100,255,${p.alpha.toFixed(2)})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        p.alpha += (Math.random() - 0.5) * 0.04;
        p.alpha = Math.max(0.05, Math.min(0.9, p.alpha));
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <>
      <canvas id="sparkCanvas" ref={canvasRef} />

      <div className="orb orb1" /><div className="orb orb2" />
      <div className="orb orb3" /><div className="orb orb4" />
      <div className="orb orb5" />

      {["s1","s2","s3","s4","s5","s6","s7"].map((cls, i) => (
        <div key={cls} className={`star ${cls}`}>{i % 2 === 0 ? "✦" : "✧"}</div>
      ))}

      <div id="lightsRow">
        <div className="wire" />
        {BULB_COLORS.map((color, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${(i / (BULB_COLORS.length - 1)) * 96 + 2}%`,
            top: "10px",
            width: "14px", height: "18px",
            background: color,
            borderRadius: "50% 50% 60% 60%",
            boxShadow: `0 0 8px 3px ${color}`,
            animation: `blinkBulb ${1.5 + (i % 4) * 0.4}s ${(i * 0.18) % 1.2}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🎊</span> Vanakkam Makkaley!!
        </div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
