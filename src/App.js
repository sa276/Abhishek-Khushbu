import { useState, useEffect, useRef } from "react";
import couplePhoto from './Abhishek_Khushbhu.png';
const SANGEET_DATE = new Date("2026-06-20T19:00:00");
const VENUE_ENGAGEMENT = "https://maps.google.com/?q=The+Cruze+Jamshedpur";
const VENUE_MARRIAGE = "https://maps.google.com/?q=De'hamray+Jamshedpur";

function useGlobalReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.12 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".rv, .rv-l, .rv-r, .rv-s").forEach(el => obs.observe(el));
    }, 200);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, []);
}

function useStyles() {
  useEffect(() => {
    // FIX #4: Use Great Vibes + Cormorant Garamond (avoid ligature-heavy Cinzel Decorative for names)
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      *{box-sizing:border-box;margin:0;padding:0}
      html{scroll-behavior:smooth}
      body{background:#060a14;color:#F0E6CC;overflow-x:hidden;font-family:'Cormorant Garamond',Georgia,serif}
      ::-webkit-scrollbar{width:3px}
      ::-webkit-scrollbar-track{background:#060a14}
      ::-webkit-scrollbar-thumb{background:#D4AF37;border-radius:2px}
      .cd{font-family:'Great Vibes',cursive;letter-spacing:.04em}
      .cd{font-family:'Cormorant',Georgia,serif;font-style:italic;font-weight:600;letter-spacing:.06em}
      .cg{font-family:'Cormorant Garamond',Georgia,serif}
      .gt{background:linear-gradient(135deg,#C9A84C 0%,#F5DC6A 35%,#FFD700 55%,#E8C56A 75%,#D4AF37 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
      .sh{background:linear-gradient(90deg,#A07830 0%,#E8C56A 20%,#FFD700 50%,#E8C56A 80%,#A07830 100%);background-size:250% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 5s linear infinite}
      @keyframes shimmer{0%{background-position:-250% center}100%{background-position:250% center}}
      @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg);opacity:.5}40%{transform:translateY(-18px) rotate(6deg);opacity:.85}70%{transform:translateY(-8px) rotate(-3deg);opacity:.6}}
      @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg);opacity:.35}50%{transform:translateY(-28px) rotate(-7deg);opacity:.75}}
      @keyframes spinCW{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      @keyframes spinCCW{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
      @keyframes pglow{0%,100%{box-shadow:0 0 25px rgba(212,175,55,.25),0 0 50px rgba(212,175,55,.08)}50%{box-shadow:0 0 45px rgba(212,175,55,.55),0 0 90px rgba(212,175,55,.22)}}
      @keyframes fadeUp{from{opacity:0;transform:translateY(70px)}to{opacity:1;transform:translateY(0)}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      @keyframes scaleIn{from{opacity:0;transform:scale(.82)}to{opacity:1;transform:scale(1)}}
      @keyframes slideL{from{opacity:0;transform:translateX(-65px)}to{opacity:1;transform:translateX(0)}}
      @keyframes slideR{from{opacity:0;transform:translateX(65px)}to{opacity:1;transform:translateX(0)}}
      @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
      @keyframes pulse-ring{0%{transform:scale(1);opacity:1}100%{transform:scale(1.6);opacity:0}}
      @keyframes digit-flip{0%{transform:rotateX(0deg);opacity:1}50%{transform:rotateX(-90deg);opacity:0}51%{transform:rotateX(90deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}
      @keyframes glow-pulse{0%,100%{text-shadow:0 0 8px rgba(255,215,0,.4),0 0 20px rgba(212,175,55,.2)}50%{text-shadow:0 0 16px rgba(255,215,0,.9),0 0 40px rgba(212,175,55,.6),0 0 60px rgba(212,175,55,.3)}}
      @keyframes border-dance{0%,100%{border-color:rgba(212,175,55,.35)}50%{border-color:rgba(255,215,0,.75)}}
      @keyframes music-bounce{0%,100%{transform:translateY(0) scale(1)}25%{transform:translateY(-4px) scale(1.08)}50%{transform:translateY(0) scale(1)}75%{transform:translateY(-2px) scale(1.04)}}
      .fa{animation:floatA 7s ease-in-out infinite}
      .fb{animation:floatB 9s ease-in-out infinite}
      .fc{animation:floatA 11s ease-in-out infinite reverse}
      .scw{animation:spinCW 22s linear infinite}
      .sccw{animation:spinCCW 16s linear infinite}
      .rv{opacity:0;transform:translateY(60px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
      .rv-l{opacity:0;transform:translateX(-60px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
      .rv-r{opacity:0;transform:translateX(60px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}
      .rv-s{opacity:0;transition:opacity .7s ease,transform .7s ease;transform:scale(.9)}
      .rv.vis,.rv-l.vis,.rv-r.vis{opacity:1;transform:translate(0)}
      .rv-s.vis{opacity:1;transform:scale(1)}
      .rv-s:nth-child(2){transition-delay:.15s}
      .rv-s:nth-child(3){transition-delay:.3s}
      .rv-s:nth-child(4){transition-delay:.45s}
      .gc{background:rgba(8,12,22,.72);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border:1px solid rgba(212,175,55,.22);border-radius:14px}
      .ec{transition:all .45s cubic-bezier(.34,1.56,.64,1)}
      .ec:hover{transform:translateY(-10px) scale(1.025);border-color:rgba(212,175,55,.65)!important;box-shadow:0 24px 64px rgba(212,175,55,.18),0 0 0 1px rgba(212,175,55,.4),inset 0 0 40px rgba(212,175,55,.04)}
      .rbtn{background:linear-gradient(135deg,rgba(212,175,55,.18),rgba(212,175,55,.04));border:1px solid rgba(212,175,55,.45);color:#F0C050;padding:14px 44px;font-size:.7rem;letter-spacing:.45em;text-transform:uppercase;border-radius:4px;cursor:pointer;font-family:'Cinzel',serif;transition:all .35s ease;animation:pglow 3s ease-in-out infinite}
      .rbtn:hover{background:linear-gradient(135deg,rgba(212,175,55,.35),rgba(212,175,55,.12));transform:translateY(-3px);letter-spacing:.55em}

      /* Countdown styles */
      .cd-block{
        position:relative;
        display:flex;flex-direction:column;align-items:center;
        perspective:400px;
      }
      .cd-num{
        font-family:'Cinzel',serif;
        font-size:clamp(2.4rem,6vw,3.8rem);
        font-weight:700;
        color:#FFD700;
        line-height:1;
        animation:glow-pulse 2.5s ease-in-out infinite;
        letter-spacing:.04em;
        min-width:2ch;
        text-align:center;
        display:block;
      }
      .cd-lbl{
        font-family:'Cinzel',serif;
        font-size:.52rem;
        letter-spacing:.38em;
        color:rgba(212,175,55,.6);
        text-transform:uppercase;
        margin-top:8px;
      }
      .cd-box{
        background:linear-gradient(160deg,rgba(20,16,6,.85) 0%,rgba(10,8,2,.95) 100%);
        border:1px solid rgba(212,175,55,.35);
        border-radius:10px;
        padding:18px 22px 14px;
        min-width:80px;
        text-align:center;
        position:relative;
        animation:border-dance 3s ease-in-out infinite;
        box-shadow:inset 0 0 30px rgba(212,175,55,.05),0 8px 32px rgba(0,0,0,.45);
      }
      .cd-box::before{
        content:'';
        position:absolute;top:0;left:50%;transform:translateX(-50%);
        width:60%;height:1px;
        background:linear-gradient(90deg,transparent,rgba(212,175,55,.7),transparent);
      }
      .cd-box::after{
        content:'';
        position:absolute;bottom:0;left:50%;transform:translateX(-50%);
        width:60%;height:1px;
        background:linear-gradient(90deg,transparent,rgba(212,175,55,.35),transparent);
      }
      .cd-sep{
        font-size:2rem;
        color:rgba(212,175,55,.4);
        align-self:center;
        animation:glow-pulse 1.5s ease-in-out infinite;
        margin-bottom:22px;
        font-family:'Cinzel',serif;
      }
      .cd-pulse{
        position:absolute;
        inset:-4px;border-radius:12px;
        border:1px solid rgba(212,175,55,.6);
        animation:pulse-ring 2.5s ease-out infinite;
        pointer-events:none;
      }

      /* Couple story card styles */
      .story-card{
        background:linear-gradient(135deg,rgba(14,10,3,.9) 0%,rgba(8,12,22,.85) 100%);
        border:1px solid rgba(212,175,55,.22);
        border-radius:16px;
        padding:32px 36px;
        position:relative;
        overflow:hidden;
      }
      .story-card::before{
        content:'"';
        position:absolute;top:-10px;left:18px;
        font-size:9rem;
        font-family:'Cormorant Garamond',Georgia,serif;
        color:rgba(212,175,55,.07);
        line-height:1.2;
        pointer-events:none;
        font-style:italic;
      }

      /* Music player */
      .music-btn{
        position:fixed;bottom:28px;right:28px;z-index:9999;
        width:52px;height:52px;border-radius:50%;
        background:linear-gradient(135deg,rgba(212,175,55,.22),rgba(212,175,55,.08));
        border:1.5px solid rgba(212,175,55,.55);
        display:flex;align-items:center;justify-content:center;
        cursor:pointer;
        box-shadow:0 4px 24px rgba(0,0,0,.5),0 0 0 0 rgba(212,175,55,.4);
        transition:all .3s ease;
        font-size:1.3rem;
        backdrop-filter:blur(12px);
        -webkit-backdrop-filter:blur(12px);
      }
      .music-btn.playing{
        animation:pglow 2s ease-in-out infinite, music-bounce 1.2s ease-in-out infinite;
      }
      .music-btn:hover{
        background:linear-gradient(135deg,rgba(212,175,55,.38),rgba(212,175,55,.16));
        border-color:rgba(212,175,55,.85);
        transform:scale(1.12);
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);
}

// FIX #5: Music Player Component
function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [_loaded, setLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Use a royalty-free ambient music URL (Web Audio API fallback)
    const audio = new Audio();
    // Generate a simple tone sequence using Web Audio API as fallback
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.35;
    // Use a public domain Indian classical / wedding ambient track
    audio.src = "Mast_Magan.mp3";
    audio.addEventListener('canplaythrough', () => setLoaded(true));
    audio.addEventListener('error', () => {
      // Silently fail if audio can't load
      setLoaded(false);
    });
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      className={`music-btn${playing ? ' playing' : ''}`}
      onClick={toggle}
      title={playing ? "Mute music" : "Play music"}
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🔊" : "🎵"}
    </button>
  );
}

function Stardust() {
  const ref = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const pts = useRef([]);
  const raf = useRef(null);

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    const resize = () => { cv.width = window.innerWidth; cv.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const N = Math.min(200, Math.floor(cv.width * cv.height / 6000));
    pts.current = Array.from({ length: N }, () => ({
      x: Math.random() * cv.width, y: Math.random() * cv.height,
      r: Math.random() * 1.8 + .25,
      vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
      op: Math.random() * .65 + .1,
      tw: Math.random() * Math.PI * 2,
      ts: Math.random() * .018 + .004,
      gold: Math.random() > .65,
    }));
    const onMove = e => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      const m = mouse.current;
      pts.current.forEach(p => {
        p.tw += p.ts;
        const tw = (Math.sin(p.tw) + 1) / 2;
        const dx = p.x - m.x, dy = p.y - m.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130 && d > 0) { const f = (130 - d) / 130; p.x += dx / d * f * 1.8; p.y += dy / d * f * 1.8; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = cv.width; if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height; if (p.y > cv.height) p.y = 0;
        const a = p.op * (.35 + tw * .65);
        const hex = Math.floor(a * 255).toString(16).padStart(2, "0");
        const c = p.gold ? "#D4AF37" : (tw > .6 ? "#F5DC6A" : "#E8D8B0");
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (.75 + tw * .5), 0, Math.PI * 2);
        ctx.fillStyle = c + hex; ctx.fill();
        if (p.gold && tw > .75) {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212,175,55,${a * .12})`; ctx.fill();
        }
      });
      raf.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

function Mandala({ size = 200, op = .18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity: op }}>
      <g transform="translate(100,100)" fill="none" stroke="#D4AF37">
        <circle r="12" strokeWidth=".5" /><circle r="28" strokeWidth=".3" strokeDasharray="2.5 4" />
        <circle r="46" strokeWidth=".4" /><circle r="64" strokeWidth=".3" strokeDasharray="1 3.5" />
        <circle r="82" strokeWidth=".35" /><circle r="96" strokeWidth=".25" strokeDasharray="1 5" />
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45})`}>
            <ellipse cx="0" cy="-46" rx="6.5" ry="18" strokeWidth=".4" />
            <line x1="0" y1="-18" x2="0" y2="-82" strokeWidth=".25" />
            <polygon points="0,-90 3,-84 -3,-84" fill="rgba(212,175,55,.4)" stroke="none" />
          </g>
        ))}
        {[...Array(16)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5})`}>
            <ellipse cx="0" cy="-70" rx="3" ry="9" fill="rgba(212,175,55,.25)" strokeWidth=".25" />
          </g>
        ))}
        <circle r="5" fill="#D4AF37" opacity=".55" stroke="none" />
        <circle r="2.5" fill="#FFD700" opacity=".8" stroke="none" />
      </g>
    </svg>
  );
}

function FloatingOrbs() {
  const orbs = [
    { sym: "✦", top: "12%", left: "4%", sz: "1.1rem", d: "0s", cl: "fa" },
    { sym: "◈", top: "28%", right: "4%", sz: ".85rem", d: ".8s", cl: "fb" },
    { sym: "✧", top: "55%", left: "3%", sz: "1.3rem", d: "2.2s", cl: "fc" },
    { sym: "◆", top: "72%", right: "5%", sz: ".75rem", d: ".4s", cl: "fa" },
    { sym: "✦", top: "42%", left: "6%", sz: ".65rem", d: "3s", cl: "fb" },
    { sym: "❋", top: "88%", left: "7%", sz: ".9rem", d: "1.5s", cl: "fc" },
    { sym: "✧", top: "18%", right: "7%", sz: ".7rem", d: "2.5s", cl: "fa" },
    { sym: "◈", top: "80%", right: "6%", sz: "1.1rem", d: "1s", cl: "fb" },
  ];
  return (
    <>
      {orbs.map((o, i) => (
        <div key={i} className={o.cl} style={{
          position: "fixed", top: o.top, left: o.left, right: o.right,
          fontSize: o.sz, color: "#D4AF37", opacity: .35, pointerEvents: "none",
          zIndex: 1, animationDelay: o.d, userSelect: "none",
        }}>{o.sym}</div>
      ))}
    </>
  );
}

function GoldDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center", margin: "20px 0" }}>
      <div style={{ flex: 1, maxWidth: 110, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,.55),transparent)" }} />
      <span style={{ color: "rgba(212,175,55,.5)", fontSize: ".68rem" }}>◈</span>
      {label && <span className="cn" style={{ color: "rgba(212,175,55,.65)", fontSize: ".62rem", letterSpacing: ".3em" }}>{label}</span>}
      <span style={{ color: "rgba(212,175,55,.5)", fontSize: ".68rem" }}>◈</span>
      <div style={{ flex: 1, maxWidth: 110, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,175,55,.55),transparent)" }} />
    </div>
  );
}

function Ring({ val, max, lbl, r, sz }) {
  const C = 2 * Math.PI * r;
  const dash = Math.min((val / max) * C, C);
  const id = `g-${lbl}`;
  return (
    <div style={{ textAlign: "center", position: "relative", width: sz, height: sz }}>
      <svg width={sz} height={sz} style={{ transform: "rotate(-90deg)", display: "block" }}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A07828" />
            <stop offset="45%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
        </defs>
        <circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="rgba(212,175,55,.08)" strokeWidth="2.5" />
        <circle cx={sz/2} cy={sz/2} r={r-7} fill="none" stroke="rgba(212,175,55,.04)" strokeWidth="1" />
        <circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke={`url(#${id})`} strokeWidth="2.5"
          strokeLinecap="round" strokeDasharray={`${dash} ${C}`}
          style={{ filter: "drop-shadow(0 0 5px rgba(212,175,55,.75))", transition: "stroke-dasharray 1s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="cn" style={{ fontSize: sz > 88 ? "1.65rem" : "1.25rem", fontWeight: 700, color: "#F0C050", lineHeight: 1 }}>
          {String(val).padStart(2, "0")}
        </div>
        <div style={{ fontSize: ".6rem", color: "rgba(212,175,55,.65)", letterSpacing: ".15em", textTransform: "uppercase", marginTop: 2, fontFamily: "'Cinzel',serif" }}>
          {lbl}
        </div>
      </div>
    </div>
  );
}

function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = SANGEET_DATE - Date.now();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({ d: Math.floor(diff / 86400000), h: Math.floor(diff % 86400000 / 3600000), m: Math.floor(diff % 3600000 / 60000), s: Math.floor(diff % 60000 / 1000) });
    };
    calc(); const id = setInterval(calc, 1000); return () => clearInterval(id);
  }, []);
  const sep = <div className="gt" style={{ fontSize: "1.3rem", alignSelf: "center", marginBottom: 18, opacity: .45 }}>✦</div>;
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
      <Ring val={t.d} max={365} lbl="Days" r={40} sz={96} />
      {sep}
      <Ring val={t.h} max={24} lbl="Hours" r={36} sz={88} />
      {sep}
      <Ring val={t.m} max={60} lbl="Minutes" r={36} sz={88} />
      {sep}
      <Ring val={t.s} max={60} lbl="Seconds" r={32} sz={80} />
    </div>
  );
}

// FIX #3: Redesigned couple story — card layout, image on side, readable prose
function CoupleStory() {
  return (
    <section style={{ padding: "90px 24px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="cn" style={{ fontSize: ".62rem", letterSpacing: ".5em", color: "rgba(212,175,55,.55)", textTransform: "uppercase", marginBottom: 14 }}>Chapter One</div>
          <h2 className="cd gt" style={{ fontSize: "clamp(2.8rem,7vw,4.5rem)", fontWeight: 400 }}>The Love Story</h2>
          <GoldDivider />
        </div>

        {/* Top: image + opening */}
        <div className="rv" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)", gap: "clamp(24px,4vw,52px)", alignItems: "center", marginBottom: 40 }}>
          {/* Compact couple image */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(212,175,55,.35)", aspectRatio: "3/4", boxShadow: "0 20px 60px rgba(0,0,0,.55), 0 0 0 1px rgba(212,175,55,.12)" }}>
              <img
               src={couplePhoto}
              alt="image"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "sepia(20%) brightness(0.88) contrast(1.08)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg,rgba(5,8,16,.82) 0%,transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 18px", textAlign: "center" }}>
                <div className="cd gt" style={{ fontSize: "1.6rem" }}></div>
              </div>
            </div>
            {/* Corner accents */}
            {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],i) => (
              <div key={i} style={{ position:"absolute",[v]:-6,[h]:-6,width:22,height:22,[`border${v[0].toUpperCase()+v.slice(1)}`]:"2px solid rgba(212,175,55,.7)",[`border${h[0].toUpperCase()+h.slice(1)}`]:"2px solid rgba(212,175,55,.7)" }} />
            ))}
          </div>

          {/* Story text */}
          <div>
            <div className="cn" style={{ fontSize: ".9rem", letterSpacing: ".4em", color: "rgba(212,175,55,.55)", textTransform: "uppercase", marginBottom: 18 }}>The Journey</div>
            <p className="cg" style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", lineHeight: 2, color: "rgba(240,230,204,.82)", fontStyle: "italic", marginBottom: 22 }}>
              From shared wooden desks to the lecture halls where their dreams first took flight, their journey has been a rhythmic dance of two souls moving in perfect sync. They grew up within the same corridors, learning the silent language of each other’s hearts while navigating the transition from childhood to the brink of the world.
            </p>
            
           
            <p className="cg" style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", lineHeight: 2, color: "rgba(240,230,204,.82)", fontStyle: "italic", marginBottom: 22 }}>
              In a life built on complex logic and intricate systems, they found the most perfect architecture in their shared laughter. Together, they have spent years building a foundation, block by block, turning a simple spark into a masterfully crafted partnership.</p>

            
            <p className="cg" style={{ fontSize: "clamp(1.05rem,2vw,1.2rem)", lineHeight: 2, color: "rgba(240,230,204,.82)", fontStyle: "italic", marginBottom: 22 }}>
             Their paths, once parallel lines through campus, have now merged into one singular, beautiful orbit. It is a love that was written in the margins of old notebooks and refined through every season of growth. Now, they stand ready to begin their forever.</p>
              
          </div>
        </div>

        {/* Three cards with story highlights */}
      </div>
    </section>
  );
}

function EventCard({ badge, title, subtitle, details, quote, featured, locationUrl }) {
  return (
    <div className={`gc ec`} style={{ overflow: "hidden", border: featured ? "1px solid rgba(212,175,55,.5)" : "1px solid rgba(212,175,55,.2)", cursor: "default" }}>
      <div style={{
        background: featured ? "linear-gradient(135deg,rgba(212,175,55,.28) 0%,rgba(212,175,55,.06) 100%)" : "linear-gradient(135deg,rgba(212,175,55,.18) 0%,rgba(212,175,55,.03) 100%)",
        padding: "28px 28px 20px", borderBottom: `1px solid rgba(212,175,55,${featured ? .22 : .12})`, position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -45, right: -45, opacity: .12, pointerEvents: "none" }}>
          <Mandala size={160} op={1} />
        </div>
        <div className="cn" style={{ fontSize: ".58rem", letterSpacing: ".5em", color: "rgba(212,175,55,.65)", textTransform: "uppercase", marginBottom: 8 }}>{badge}</div>
        <h3 className="cd gt" style={{ fontSize: "2.5rem", fontWeight: featured ? 700 : 400, lineHeight: 1.2, letterSpacing: ".04em" }}>{title}</h3>
        <div className="cg" style={{ color: "rgba(240,230,204,.6)", fontSize: ".92rem", fontStyle: "italic", marginTop: 7 }}>{subtitle}</div>
      </div>
      <div style={{ padding: "22px 28px 26px" }}>
        {details.map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: i < details.length - 1 ? 14 : 0 }}>
            <span style={{ color: "#D4AF37", fontSize: ".68rem", marginTop: 3, flexShrink: 0 }}>◈</span>
            <div>
              <div className="cn" style={{ fontSize: ".52rem", letterSpacing: ".25em", color: "rgba(212,175,55,.48)", textTransform: "uppercase" }}>{d.lbl}</div>
              <div className="cg" style={{ fontSize: "1rem", color: "rgba(240,230,204,.9)", marginTop: 1 }}>{d.val}</div>
            </div>
          </div>
        ))}

        {/* FIX #1: Location CTA */}
        {locationUrl && (
          <div style={{ borderTop: "1px solid rgba(212,175,55,.14)", paddingTop: 15, marginTop: 18 }}>
            <button
              className="rbtn"
              style={{ width: "100%", fontSize: ".62rem", padding: "12px 24px", letterSpacing: ".35em" }}
              onClick={() => window.open(locationUrl, "_blank")}
            >
              ✦ Location ✦
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WeddingInvitation() {
  useStyles();
  useGlobalReveal();

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#050810 0%,#08101e 18%,#0b1428 45%,#080c16 100%)", position: "relative", overflowX: "hidden" }}>
      <Stardust />
      <FloatingOrbs />
      {/* FIX #5: Floating music player */}
      <MusicPlayer />

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px 48px", position: "relative", zIndex: 2, textAlign: "center" }}>

        {/* Spinning mandalas behind monogram */}
        <div style={{ position: "relative", width: 210, height: 210, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
          <div className="scw" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mandala size={210} op={.32} />
          </div>
          <div className="sccw" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mandala size={162} op={.2} />
          </div>
          <div style={{ position: "relative", textAlign: "center" }}>
            <div className="cn" style={{ fontSize: ".6rem", letterSpacing: ".45em", color: "rgba(212,175,55,.7)", textTransform: "uppercase", marginBottom: 6 }}>Together Forever</div>
            <div style={{ fontSize: "2.2rem", lineHeight: 1, animation: "bob 3s ease-in-out infinite" }}>❤️</div>
          </div>
        </div>

        <div className="cg" style={{ fontSize: ".95rem", letterSpacing: ".35em", color: "rgba(212,175,55,.65)", textTransform: "uppercase", marginBottom: 22, animation: "fadeIn 2.2s ease both" }}>
          ✦ Together With Their Families ✦
        </div>

        {/* FIX #4: Split names so A & K render separately, no ligature issues */}
        <div style={{ animation: "fadeUp 1.2s cubic-bezier(.22,1,.36,1) .3s both" }}>
          <h1 className="cd sh" style={{ fontSize: "clamp(3rem,10vw,6.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: ".04em", display: "block" }}>ABHISHEK</h1>
          <div className="cg gt" style={{ fontSize: "clamp(1.3rem,4vw,2.2rem)", letterSpacing: ".55em", margin: "8px 0", fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif" }}>&amp;</div>
          <h1 className="cd sh" style={{ fontSize: "clamp(3rem,10vw,6.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: ".04em", display: "block" }}>KHUSHBU</h1>
        </div>

        <GoldDivider label="Request The Honour Of Your Presence" />

        <div className="cg" style={{ fontSize: "clamp(.95rem,2.5vw,1.3rem)", color: "rgba(240,230,204,.78)", letterSpacing: ".08em", fontStyle: "italic", maxWidth: 480, lineHeight: 1.85, marginBottom: 44, animation: "fadeIn 1.5s ease .8s both" }}>
          At the celebration of their sacred union on<br />
          <span className="cn gt" style={{ fontStyle: "normal", fontWeight: 600, fontSize: "clamp(.9rem,2vw,1.1rem)", letterSpacing: ".12em" }}>June 20 &amp; 21, 2026</span>
        </div>

        {/* FIX #2: Lively Countdown */}
        <div className="gc" style={{ padding: "32px 36px", maxWidth: 620, width: "100%", animation: "scaleIn 1.1s cubic-bezier(.22,1,.36,1) .6s both" }}>
          <div className="cn" style={{ fontSize: ".6rem", letterSpacing: ".42em", color: "rgba(212,175,55,.55)", textAlign: "center", marginBottom: 26, textTransform: "uppercase" }}>
            ✦ Counting Down to the Celebrations ✦
          </div>
          <Countdown />
        </div>

        {/* Scroll cue */}
        <div style={{ marginTop: 52, display: "flex", flexDirection: "column", alignItems: "center", gap: 7, animation: "bob 2.5s ease-in-out infinite", opacity: .55 }}>
          <div className="cn" style={{ color: "rgba(212,175,55,.6)", fontSize: ".6rem", letterSpacing: ".35em" }}>SCROLL TO EXPLORE</div>
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
            <rect x="7" y="2" width="4" height="7" rx="2" fill="rgba(212,175,55,.55)" />
            <path d="M2 17 L9 25 L16 17" stroke="rgba(212,175,55,.55)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* FIX #3: Redesigned couple story */}
      <CoupleStory />

      {/* ── EVENTS ── */}
      <section style={{ padding: "90px 24px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="cn" style={{ fontSize: ".62rem", letterSpacing: ".5em", color: "rgba(212,175,55,.55)", textTransform: "uppercase", marginBottom: 14 }}>Chapter Two</div>
            <h2 className="cd gt" style={{ fontSize: "clamp(2.8rem,7vw,4.5rem)", fontWeight: 400 }}>The Celebrations</h2>
            <GoldDivider />
            <p className="cg" style={{ color: "rgba(240,230,204,.68)", fontSize: "1.1rem", fontStyle: "italic", maxWidth: 480, margin: "14px auto 0", lineHeight: 1.8 }}>
              Two golden evenings of joy, music, and eternal blessings
            </p>
          </div>

          {/* FIX #1: Each card now has a Location CTA */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(285px,1fr))", gap: 26 }}>
            <div className="rv-s">
              <EventCard
                badge="Day One ✦ Gala Evening"
                title="Engagement"
                subtitle="An Evening of Music & Dance"
                details={[
                  { lbl: "Date", val: "Saturday, June 20, 2026" },
                  { lbl: "Time", val: "7:00 PM Onwards" },
                  { lbl: "Venue", val: "The Cruze, Jamshedpur" },
                ]}
                locationUrl={VENUE_ENGAGEMENT}
              />
            </div>
            <div className="rv-s">
              <EventCard
                featured
                badge="Day Two ✦ Main Ceremony"
                title="Vivah"
                subtitle="The Sacred Wedding Ceremony"
                details={[
                  { lbl: "Date", val: "Sunday, June 21, 2026" },
                  { lbl: "Time", val: "11:00 AM Onwards" },
                  { lbl: "Venue", val: "De'hamray, Jamshedpur" },
                ]}
                locationUrl={VENUE_MARRIAGE}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section style={{ padding: "90px 24px 70px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div className="rv" style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: 44 }}>
            <div className="scw" style={{ display: "flex" }}><Mandala size={190} op={.28} /></div>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "2.6rem", animation: "bob 4s ease-in-out infinite" }}>☸</div>
            </div>
          </div>

          <div className="cn" style={{ fontSize: ".62rem", letterSpacing: ".5em", color: "rgba(212,175,55,.48)", textTransform: "uppercase", marginBottom: 14 }}>
            With Love & Blessings
          </div>

          {/* FIX #4: Separate lines prevent ligature merge */}
          <div>
            <span className="cd sh" style={{ fontSize: "clamp(2.2rem,6.5vw,3.8rem)", fontWeight: 400, display: "inline" }}>Abhishek</span>
            <span className="cg gt" style={{ fontSize: "clamp(1.2rem,3vw,2rem)", fontStyle: "italic", display: "inline", margin: "0 12px" }}>&amp;</span>
            <span className="cd sh" style={{ fontSize: "clamp(2.2rem,6.5vw,3.8rem)", fontWeight: 400, display: "inline" }}>Khushbu</span>
          </div>

          <GoldDivider />

          <blockquote className="cg" style={{ fontSize: "clamp(1rem,2.5vw,1.18rem)", fontStyle: "italic", color: "rgba(240,230,204,.72)", lineHeight: 1.9, maxWidth: 520, margin: "0 auto 48px" }}>
            "As the eternal wheels of the sun god align with a foundation as steady as the iron heartland, two souls find their center. We invite you to a celebration where the rhythm of the coast meets the enduring spirit of the forge, beginning a journey that is both resilient and divine."
          </blockquote>

          

          {/* Bottom filigree line */}
          <div style={{ marginTop: 64, paddingTop: 26, borderTop: "1px solid rgba(212,175,55,.1)" }}>
            <div className="cn" style={{ fontSize: ".6rem", letterSpacing: ".28em", color: "rgba(212,175,55,.28)", textTransform: "uppercase", lineHeight: 2.2 }}>
              ◈ Abhishek Kumar &amp; Khushbu Panigrahi ◈<br />
              <span style={{ letterSpacing: ".14em" }}>21 June 2026</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}