// Abstract data-landscape visual for the hero: a particle wave field with a
// highlighted crest line and rising "signal" stems. Purely decorative.
const WIDTH = 700;
const HEIGHT = 460;

function waveY(x, amplitude, frequency, phase, baseline) {
  return baseline + Math.sin(x * frequency + phase) * amplitude;
}

function buildDots() {
  const dots = [];
  const cols = 46;
  const rows = 16;
  for (let row = 0; row < rows; row += 1) {
    const rowT = row / (rows - 1);
    const baseline = 150 + rowT * 230;
    const amplitude = 26 + rowT * 10;
    const frequency = 0.012 + rowT * 0.002;
    const phase = rowT * 2.2;
    for (let col = 0; col < cols; col += 1) {
      const x = (col / (cols - 1)) * WIDTH;
      const y = waveY(x, amplitude, frequency, phase, baseline);
      const distFromCrest = Math.abs(rowT - 0.42);
      const opacity = Math.max(0.08, 0.55 - distFromCrest * 0.9);
      const radius = row % 3 === 0 ? 1.6 : 1.1;
      dots.push({ key: `${row}-${col}`, x, y, opacity, radius });
    }
  }
  return dots;
}

function buildCrestLine() {
  const points = [];
  const steps = 60;
  for (let i = 0; i <= steps; i += 1) {
    const x = (i / steps) * WIDTH;
    const y = waveY(x, 34, 0.011, 0.9, 168);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

const stems = [
  { x: 60, height: 70 },
  { x: 130, height: 40 },
  { x: 195, height: 95 },
  { x: 260, height: 55 },
  { x: 320, height: 120 },
  { x: 385, height: 65 },
  { x: 450, height: 100 },
  { x: 510, height: 45 },
  { x: 570, height: 85 },
  { x: 630, height: 60 },
];

export function HeroWave({ className }) {
  const dots = buildDots();
  const crest = buildCrestLine();

  return (
    <svg
      className={className}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="crestGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#315BFF" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#6C8CFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#9B7CFF" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="stemDot">
          <stop offset="0%" stopColor="#B9C6FF" />
          <stop offset="100%" stopColor="#5B6EFF" />
        </radialGradient>
      </defs>

      {stems.map(({ x, height }) => {
        const y = waveY(x, 34, 0.011, 0.9, 168);
        return (
          <g key={x} opacity="0.85">
            <line x1={x} y1={y} x2={x} y2={y - height} stroke="#4C5FE0" strokeWidth="1" opacity="0.5" />
            <circle cx={x} cy={y - height} r="2.6" fill="url(#stemDot)" />
          </g>
        );
      })}

      {dots.map((dot) => (
        <circle
          key={dot.key}
          cx={dot.x}
          cy={dot.y}
          r={dot.radius}
          fill="#7C93FF"
          opacity={dot.opacity}
        />
      ))}

      <path d={crest} stroke="url(#crestGradient)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
