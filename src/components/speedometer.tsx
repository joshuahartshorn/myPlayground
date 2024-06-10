interface SpeedometerProps {
  value: number;
}

// TODO: Write some tests for this component

export default function Speedometer({ value }: SpeedometerProps) {
  const percentage = (Math.min(Math.max(value, 0), 10) / 10) * 100;
  const angle = (percentage / 100) * 180 - 180; // angle in degrees
  const svgCenterX = 320 / 2; // 160

  // Circle position
  const circleRadius = 144; // Distance from the center of the SVG
  const circleX = circleRadius * Math.cos(angle * (Math.PI / 180)) + 160;
  const circleY = circleRadius * Math.sin(angle * (Math.PI / 180)) + 160;
  return (
    <svg viewBox="0 0 320 160">
      <path
        d="M8 160C3.58172 160 -0.020874 156.416 0.199822 152.003C1.95753 116.858 15.2592 83.2617 38.0362 56.4389C40.8961 53.0711 45.976 52.9243 49.1968 55.9488L60.8603 66.9016C64.0811 69.9261 64.2182 74.9742 61.4007 78.3775C44.1472 99.2183 33.939 125.001 32.2498 152.004C31.9739 156.414 28.4183 160 24 160H8Z"
        fill="#F04D1A"
      />
      <path
        d="M8 160C3.58172 160 -0.020874 156.416 0.199822 152.003C1.95753 116.858 15.2592 83.2617 38.0362 56.4389C40.8961 53.0711 45.976 52.9243 49.1968 55.9488L60.8603 66.9016C64.0811 69.9261 64.2182 74.9742 61.4007 78.3775C44.1472 99.2183 33.939 125.001 32.2498 152.004C31.9739 156.414 28.4183 160 24 160H8Z"
        fill="url(#pattern0_107_106)"
      />
      <path
        d="M52.5198 52.5198C49.3956 49.3956 49.3827 44.3136 52.6591 41.3493C78.7532 17.741 111.915 3.39064 146.987 0.529871C151.391 0.170676 155.087 3.65891 155.226 8.075L155.728 24.0671C155.867 28.4832 152.394 32.1498 147.996 32.564C121.059 35.1005 95.6093 46.1135 75.3207 64.0132C72.0076 66.9362 66.9577 66.9577 63.8335 63.8335L52.5198 52.5198Z"
        fill="#FBA94B"
      />
      <path
        d="M52.5198 52.5198C49.3956 49.3956 49.3827 44.3136 52.6591 41.3493C78.7532 17.741 111.915 3.39064 146.987 0.529871C151.391 0.170676 155.087 3.65891 155.226 8.075L155.728 24.0671C155.867 28.4832 152.394 32.1498 147.996 32.564C121.059 35.1005 95.6093 46.1135 75.3207 64.0132C72.0076 66.9362 66.9577 66.9577 63.8335 63.8335L52.5198 52.5198Z"
        fill="url(#pattern1_107_106)"
        fillOpacity="0.5"
      />
      <path
        d="M160 8C160 3.58172 163.584 -0.0208743 167.997 0.199822C203.142 1.95753 236.738 15.2592 263.561 38.0362C266.929 40.8961 267.076 45.976 264.051 49.1968L253.098 60.8603C250.074 64.081 245.026 64.2182 241.622 61.4007C220.782 44.1471 194.999 33.939 167.996 32.2498C163.586 31.9739 160 28.4183 160 24V8Z"
        fill="#B981DA"
      />
      <path
        d="M160 8C160 3.58172 163.584 -0.0208743 167.997 0.199822C203.142 1.95753 236.738 15.2592 263.561 38.0362C266.929 40.8961 267.076 45.976 264.051 49.1968L253.098 60.8603C250.074 64.081 245.026 64.2182 241.622 61.4007C220.782 44.1471 194.999 33.939 167.996 32.2498C163.586 31.9739 160 28.4183 160 24V8Z"
        fill="url(#pattern2_107_106)"
        fillOpacity="0.15"
      />
      <path
        d="M267.48 52.5198C270.604 49.3956 275.686 49.3827 278.651 52.6591C302.259 78.7532 316.609 111.915 319.47 146.987C319.829 151.391 316.341 155.087 311.925 155.226L295.933 155.728C291.517 155.867 287.85 152.394 287.436 147.996C284.899 121.059 273.886 95.6093 255.987 75.3207C253.064 72.0076 253.042 66.9577 256.167 63.8335L267.48 52.5198Z"
        fill="#32AE60"
      />
      <path
        d="M267.48 52.5198C270.604 49.3956 275.686 49.3827 278.651 52.6591C302.259 78.7532 316.609 111.915 319.47 146.987C319.829 151.391 316.341 155.087 311.925 155.226L295.933 155.728C291.517 155.867 287.85 152.394 287.436 147.996C284.899 121.059 273.886 95.6093 255.987 75.3207C253.064 72.0076 253.042 66.9577 256.167 63.8335L267.48 52.5198Z"
        fill="url(#pattern3_107_106)"
        fillOpacity="0.15"
      />

      <circle cx={circleX} cy={circleY} r="12" fill="none" stroke="white" strokeWidth={4} />
      <text x={svgCenterX} y="100" textAnchor="middle" fontSize="32" fontWeight="500" dy=".3em">
        {value}
      </text>
      <text x={svgCenterX} y="140" textAnchor="middle" fontSize="16" fontWeight={200} color="grey" dy=".3em">
        out of 10
      </text>
    </svg>
  );
}
