import React from 'react';

export default function MatchingCard() {
  return (
    <div className="relative w-full max-w-sm aspect-square select-none">
      {/* Top-Right Arrow Button Container */}
      <a
        href="#learn-more"
        className="absolute top-4 right-4 z-20 flex items-center justify-center w-12 h-12 text-black transition-transform duration-300 hover:scale-110"
        aria-label="Learn more"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>

      {/* Card Background Shape with Notched Rounded Top-Right Corner */}
      <div className="absolute inset-0 w-full h-full drop-shadow-sm">
        <svg
          className="w-full h-full text-[#9ec4f5] fill-current"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
        >
          {/*
            Exact path reproducing the card silhouette:
            - 32px rounded outer corners
            - Top-right notch step-down with smooth concave & convex curves
          */}
          <path d="
            M 40 0
            H 280
            A 32 32 0 0 1 312 32
            V 60
            A 24 24 0 0 0 336 84
            H 368
            A 32 32 0 0 1 400 116
            V 360
            A 40 40 0 0 1 360 400
            H 40
            A 40 40 0 0 1 0 360
            V 40
            A 40 40 0 0 1 40 0
            Z" 
          />
        </svg>
      </div>

      {/* Card Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 pt-10 pb-8 text-center text-slate-950">
        
        {/* Center Illustration / Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <svg
            className="w-28 h-28 text-slate-900"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Curved bottom arch */}
            <path d="M 18 68 A 38 38 0 0 0 82 68" strokeWidth="2.5" />

            {/* Dotted arc on top left */}
            <path d="M 32 26 A 22 22 0 0 1 52 20" strokeDasharray="2 4" strokeWidth="2" />
            
            {/* Small arrow on top dotted arc */}
            <path d="M 49 18 L 54 20 L 51 24" strokeWidth="2" />

            {/* Bottom-right dotted trail */}
            <path d="M 68 50 A 18 18 0 0 1 54 62" strokeDasharray="2 4" strokeWidth="2" />

            {/* Figures pointing to star */}
            {/* Person 1 (left/behind) */}
            <circle cx="36" cy="42" r="4.5" strokeWidth="2" />
            <path d="M 30 56 V 51 A 6 6 0 0 1 36 45 H 37" strokeWidth="2" />

            {/* Person 2 (front/pointing) */}
            <circle cx="46" cy="38" r="4.5" strokeWidth="2" />
            <path d="M 40 56 V 47 A 5 5 0 0 1 45 42 H 49 L 58 35" strokeWidth="2" />

            {/* Target Star */}
            <polygon
              points="64,22 66,27 71,28 67,32 68,37 64,34 60,37 61,32 57,28 62,27"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-4 text-slate-950">
          Personalized <br /> Matching
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed max-w-[260px]">
          Connect with mentors and coaches who align with your goals.
        </p>
      </div>
    </div>
  );
}