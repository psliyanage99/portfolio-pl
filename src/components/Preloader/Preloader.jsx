import React, { useEffect, useState } from 'react';

const injectKeyframes = () => {
  if (document.getElementById('pl-kf')) return;
  const s = document.createElement('style');
  s.id = 'pl-kf';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');
    @keyframes pl-spin { to { transform: rotate(360deg); } }
    @keyframes pl-up {
      from { opacity:0; transform:translateY(8px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes pl-glow {
      0%,100% { opacity:.07; transform:scale(1); }
      50%      { opacity:.15; transform:scale(1.12); }
    }
    .pl-e1 { animation: pl-up .6s .10s cubic-bezier(.25,1,.5,1) both; }
    .pl-e2 { animation: pl-up .6s .20s cubic-bezier(.25,1,.5,1) both; }
    .pl-e3 { animation: pl-up .6s .30s cubic-bezier(.25,1,.5,1) both; }
    .pl-glow-anim { animation: pl-glow 4s ease-in-out infinite; }
    .pl-ring { animation: pl-spin 9s linear infinite; }
    @keyframes shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;
  document.head.appendChild(s);
};

const C = {
  bg:        '#010412',
  primary:   '#9333ea',
  secondary: '#667eea',
  accent:    '#f093fb',
  text:      'rgba(226,232,240,0.38)',
  textDim:   'rgba(226,232,240,0.20)',
  textFaint: 'rgba(226,232,240,0.10)',
};

const STEPS = [
  { pct: 15,  msg: 'Initializing environment' },
  { pct: 35,  msg: 'Resolving dependencies'   },
  { pct: 55,  msg: 'Compiling modules'         },
  { pct: 75,  msg: 'Connecting services'       },
  { pct: 90,  msg: 'Optimizing assets'         },
  { pct: 100, msg: 'Ready'                     },
];

export default function Preloader({ onComplete, initials = 'PL', name = 'Portfolio.PL' }) {
  const [step, setStep]    = useState(0);
  const [exiting, setExit] = useState(false);

  useEffect(() => { injectKeyframes(); }, []);

  useEffect(() => {
    // 1. Check if we reached the final step
    if (step >= STEPS.length - 1) {
      // Small pause so the user sees "100% Ready" for a split second
      const t = setTimeout(() => {
        setExit(true);
        // Trigger onComplete slightly BEFORE the fade ends to prime the main site
        onComplete?.(); 
      }, 350); 
      return () => clearTimeout(t);
    }

    // 2. Faster progression between steps
    const t = setTimeout(
      () => setStep(s => s + 1),
      step === 0 ? 200 : 200 + Math.random() * 150
    );
    return () => clearTimeout(t);
  }, [step, onComplete]);

  const cur  = STEPS[step];
  const mono = "'DM Mono', monospace";

  return (
    <div style={{
      position:'fixed', inset:0, background: C.bg, zIndex:9999, overflow:'hidden',
      display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
      fontFamily: mono,
      opacity: exiting ? 0 : 1,
      transform: exiting ? 'scale(1.02)' : 'scale(1)',
      // SNAPPY TRANSITION: Reduced from 0.85s to 0.35s
      transition: 'opacity 0.35s ease-in-out, transform 0.35s ease-out',
      pointerEvents: exiting ? 'none' : 'all',
    }}>

      {/* Noise Overlay */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none', opacity:.04,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}/>

      {/* Glow Ambient */}
      <div className="pl-glow-anim" style={{
        position:'absolute', width:640, height:640, borderRadius:'50%', pointerEvents:'none',
        background:`radial-gradient(circle, rgba(147,51,234,.10) 0%, rgba(102,126,234,.05) 50%, transparent 70%)`,
      }}/>

      {/* Corner Accents */}
      {[
        { top:28, left:28, borderTop: `1px solid rgba(147,51,234,.45)`, borderLeft: `1px solid rgba(147,51,234,.45)` },
        { top:28, right:28, borderTop: `1px solid rgba(147,51,234,.45)`, borderRight: `1px solid rgba(147,51,234,.45)` },
        { bottom:28, left:28, borderBottom:`1px solid rgba(147,51,234,.45)`, borderLeft: `1px solid rgba(147,51,234,.45)` },
        { bottom:28, right:28, borderBottom:`1px solid rgba(147,51,234,.45)`, borderRight:`1px solid rgba(147,51,234,.45)` },
      ].map((s, i) => (
        <div key={i} style={{ position:'absolute', width:36, height:36, pointerEvents:'none', ...s }}/>
      ))}

      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:44, position:'relative', zIndex:2 }}>
        
        {/* Ring & Initials */}
        <div className="pl-e1" style={{ position:'relative', width:80, height:80, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ position:'absolute', inset:-10, borderRadius:'50%', border:`1px solid rgba(147,51,234,.10)` }}/>
          <div className="pl-ring" style={{ position:'absolute', inset:0, borderRadius:'50%', border:`1px solid rgba(147,51,234,.30)` }}>
            <div style={{
              position:'absolute', top:-3, left:'50%', transform:'translateX(-50%)',
              width:6, height:6, borderRadius:'50%', background: C.primary,
              boxShadow:`0 0 8px ${C.primary}, 0 0 18px rgba(147,51,234,.6)`,
            }}/>
          </div>
          <span style={{ fontSize:21, fontWeight:500, color:'rgba(226,232,240,.90)', letterSpacing:'0.14em', textShadow:`0 0 20px ${C.primary}` }}>
            {initials}
          </span>
        </div>

        {/* Name / Title */}
        <div className="pl-e2" style={{ textAlign:'center' }}>
          <div style={{ fontSize:11, letterSpacing:'0.42em', color: C.text, textTransform:'uppercase', marginBottom:10 }}>{name}</div>
          <div style={{ fontSize:10, letterSpacing:'0.28em', color: C.accent, textTransform:'uppercase', opacity:.80 }}>Software Engineer</div>
        </div>

        {/* Progress Section */}
        <div className="pl-e3" style={{ width:320, display:'flex', flexDirection:'column', gap:11 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontSize:9, letterSpacing:'0.32em', color: C.secondary, textTransform:'uppercase' }}>Loading Assets</span>
            <span style={{ fontSize:11, letterSpacing:'0.12em', color: C.primary, fontWeight:'bold', fontVariantNumeric:'tabular-nums' }}>
              {cur.pct}%
            </span>
          </div>

          <div style={{ height:2, background:`rgba(139,92,246,.12)`, border:`1px solid rgba(147,51,234,.25)`, borderRadius:4, position:'relative' }}>
            <div style={{
              height:'100%', borderRadius:4,
              background:`linear-gradient(90deg, ${C.primary} 0%, ${C.secondary} 50%, ${C.accent} 100%)`,
              backgroundSize:'200% 100%', animation:'shimmer 2s linear infinite',
              width:`${cur.pct}%`, transition:'width .3s ease-out', position:'relative',
            }}>
               {cur.pct < 100 && (
                <div style={{ position:'absolute', right:-3, top:'50%', transform:'translateY(-50%)', width:6, height:6, borderRadius:'50%', background: C.accent }}/>
              )}
            </div>
          </div>

          <div style={{ fontSize:9, letterSpacing:'0.22em', color: C.secondary, textAlign:'center', textTransform:'uppercase', height:14, opacity:.75 }}>
            {cur.msg}
          </div>
        </div>
      </div>
    </div>
  );
}