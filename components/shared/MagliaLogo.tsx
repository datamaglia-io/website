export default function MagliaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mesh/Grid Pattern - Inspired by Italian "Maglia" */}
      <defs>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" fill="url(#meshGradient)" opacity="0.1" />

      {/* Mesh Grid Pattern */}
      <g stroke="url(#meshGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        {/* Vertical Lines */}
        <path d="M 20 20 L 20 80" />
        <path d="M 35 15 L 35 85" />
        <path d="M 50 10 L 50 90" />
        <path d="M 65 15 L 65 85" />
        <path d="M 80 20 L 80 80" />

        {/* Horizontal Lines */}
        <path d="M 20 20 L 80 20" />
        <path d="M 15 35 L 85 35" />
        <path d="M 10 50 L 90 50" />
        <path d="M 15 65 L 85 65" />
        <path d="M 20 80 L 80 80" />

        {/* Connection Nodes */}
        <circle cx="35" cy="35" r="3" fill="url(#meshGradient)" />
        <circle cx="50" cy="35" r="3" fill="url(#meshGradient)" />
        <circle cx="65" cy="35" r="3" fill="url(#meshGradient)" />

        <circle cx="35" cy="50" r="3" fill="url(#meshGradient)" />
        <circle cx="50" cy="50" r="4" fill="url(#meshGradient)" />
        <circle cx="65" cy="50" r="3" fill="url(#meshGradient)" />

        <circle cx="35" cy="65" r="3" fill="url(#meshGradient)" />
        <circle cx="50" cy="65" r="3" fill="url(#meshGradient)" />
        <circle cx="65" cy="65" r="3" fill="url(#meshGradient)" />
      </g>

      {/* Center Highlight */}
      <circle cx="50" cy="50" r="6" fill="url(#meshGradient)" opacity="0.8" />
      <circle cx="50" cy="50" r="3" fill="white" />
    </svg>
  );
}
