interface SpeedometerProps {
  value: number;
}

export default function Speedometer({ value }: SpeedometerProps) {
  const arcRadius = 100;
  const percentage = (Math.min(Math.max(value, 0), 10) / 10) * 100;
  const svgCenterX = 110; // Center X of the arc
  const svgCenterY = 100; // Center Y of the arc
  const angle = ((percentage / 100) * 180 - 180) * (Math.PI / 180); // angle in radians
  const circumference = 2 * Math.PI * arcRadius;
  const semiCircumference = circumference / 2;
  const gap = semiCircumference / 100; // 1% of the semi-circumference
  const segment = (semiCircumference - 3 * gap) / 4; // 4 segments, 3 gaps

  // Cirlce position
  const circleX = arcRadius * Math.cos(angle) + svgCenterX;
  const circleY = arcRadius * Math.sin(angle) + svgCenterY;

  return (
    <svg viewBox="0 -20 220 140" aria-label={`Speedometer showing value ${value} out of 10`}>
      <path
        d="M 110,100 m -100,0 a 100,100 0 1,1 200,0"
        stroke="#F04C1A"
        strokeWidth="15"
        fillOpacity="0"
        strokeDasharray={`${segment} ${semiCircumference}`}
        strokeDashoffset="0"
      />
      <path
        d="M 110,100 m -100,0 a 100,100 0 1,1 200,0"
        stroke="#FBA94B"
        strokeWidth="15"
        fillOpacity="0"
        strokeDasharray={`${segment} ${semiCircumference}`}
        strokeDashoffset={`${-(segment + gap)}`}
      />
      <path
        d="M 110,100 m -100,0 a 100,100 0 1,1 200,0"
        stroke="#B980DA"
        strokeWidth="15"
        fillOpacity="0"
        strokeDasharray={`${segment} ${semiCircumference}`}
        strokeDashoffset={`${-(2 * segment + 2 * gap)}`}
      />
      <path
        d="M 110,100 m -100,0 a 100,100 0 1,1 200,0"
        stroke="#32AE60"
        strokeWidth="15"
        fillOpacity="0"
        strokeDasharray={`${segment} ${semiCircumference}`}
        strokeDashoffset={`${-(3 * segment + 3 * gap)}`}
      />
      <circle cx={circleX} cy={circleY} r="6" fill="none" strokeWidth="2" stroke="white" />
      <text x={svgCenterX} y="50" textAnchor="middle" fontSize="32" fontWeight="500" dy=".3em">
        {value}
      </text>
      <text x={svgCenterX} y="85" textAnchor="middle" fontSize="16" fontWeight={200} color="grey" dy=".3em">
        out of 10
      </text>
    </svg>
  );
}
