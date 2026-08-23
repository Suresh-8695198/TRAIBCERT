'use client';

import React, { useState, useEffect } from 'react';
import { Pause, RotateCcw } from 'lucide-react';

interface LocationPoint {
  id: string;
  name: string;
  x: number;
  y: number;
}

// User exact pixel coordinates on 1746x940 map canvas
const locations: LocationPoint[] = [
  { id: "P01", name: "UK West", x: 800,  y: 263 },
  { id: "P02", name: "UK East", x: 821,  y: 244 },
  { id: "P03", name: "Europe Central", x: 888,  y: 276 },
  { id: "P04", name: "Turkey", x: 981,  y: 343 },

  // Middle East cluster
  { id: "P05", name: "Middle East 1", x: 1014, y: 405 },
  { id: "P06", name: "Middle East 2", x: 1036, y: 421 },
  { id: "P07", name: "Middle East 3", x: 1066, y: 425 },
  { id: "P08", name: "Middle East 4", x: 1007, y: 435 },
  { id: "P09", name: "Middle East 5", x: 1031, y: 451 },
  { id: "P10", name: "Middle East 6", x: 1020, y: 478 },
  { id: "P11", name: "Middle East 7", x: 1056, y: 466 },

  { id: "P12", name: "USA / Americas", x: 449,  y: 396 },
  { id: "P13", name: "India North", x: 1185, y: 433 },
  { id: "P14", name: "India South", x: 1197, y: 514 },
  { id: "P15", name: "Australia", x: 1464, y: 696 },
  { id: "P16", name: "New Zealand", x: 1618, y: 769 }
];

export const GlobalPresenceMapSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showAllMarked, setShowAllMarked] = useState<boolean>(false);
  const [hoveredPoint, setHoveredPoint] = useState<LocationPoint | null>(null);
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  // Faster, Ultra-Smooth Sequence Animation (480ms step interval)
  useEffect(() => {
    if (!isPlaying || showAllMarked) return;
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= locations.length) {
          setShowAllMarked(true);
          return locations.length;
        }
        return prev + 1;
      });
    }, 480);
    return () => clearInterval(timer);
  }, [isPlaying, showAllMarked]);

  const handleShowAll = () => {
    setClickedButton('reset');
    setShowAllMarked(true);
    setVisibleCount(locations.length);
    setIsPlaying(false);
    setTimeout(() => setClickedButton(null), 300);
  };

  const handlePlaySequence = () => {
    setClickedButton('play');
    setShowAllMarked(false);
    setVisibleCount(1);
    setIsPlaying(true);
    setTimeout(() => setClickedButton(null), 300);
  };

  return (
    <section id="our-presence" style={{ backgroundColor: '#ffffff', paddingTop: '72px', paddingBottom: '88px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 28px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#1a1854', letterSpacing: '-0.5px', margin: 0 }}>
            Our <span style={{ color: '#1a1854' }}>Presence</span>
          </h2>
        </div>

        {/* 100% Fixed Aspect Ratio Container (Zero Layout Shift when Toggling Images) */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            position: 'relative',
            aspectRatio: '1746 / 940',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'transparent'
          }}
        >
          {/* Base Unmarked Map Layer */}
          <img
            src="/assets/images/Home/map_without_marked.png"
            alt="TRAIBCERT 3D World Map"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: showAllMarked ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out',
              pointerEvents: 'none'
            }}
          />

          {/* Marked Map Layer */}
          <img
            src="/assets/images/Home/map_with_Marked.png"
            alt="TRAIBCERT 3D World Map with Accredited Pins"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: showAllMarked ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              pointerEvents: 'none'
            }}
          />

          {/* SVG Overlay for Connected Lines */}
          <svg
            viewBox="0 0 1746 940"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'visible',
              zIndex: 5
            }}
          >
            {/* Double-Layer Curved Connected Lines */}
            {(showAllMarked ? locations : locations.slice(0, visibleCount)).map((loc, idx, arr) => {
              const nextLoc = arr[idx + 1];
              if (!nextLoc) return null;

              const midX = (loc.x + nextLoc.x) / 2;
              const midY = (loc.y + nextLoc.y) / 2 - 28;

              return (
                <g key={`arc-${idx}`}>
                  {/* Outer Guide Line */}
                  <path
                    d={`M ${loc.x} ${loc.y} Q ${midX} ${midY} ${nextLoc.x} ${nextLoc.y}`}
                    fill="none"
                    stroke="#f9b933"
                    strokeWidth="4"
                    opacity="0.3"
                  />

                  {/* Fast Animated Line Flow */}
                  <path
                    d={`M ${loc.x} ${loc.y} Q ${midX} ${midY} ${nextLoc.x} ${nextLoc.y}`}
                    fill="none"
                    stroke="#f9b933"
                    strokeWidth="3.5"
                    strokeDasharray="10, 6"
                    style={{
                      animation: 'lineFlow 0.5s linear infinite'
                    }}
                  />
                </g>
              );
            })}

            {/* Render Pins dynamically during sequence play mode */}
            {!showAllMarked && locations.slice(0, visibleCount).map((loc, index) => {
              const isLatest = index === visibleCount - 1;
              const isHovered = hoveredPoint?.id === loc.id;

              return (
                <g
                  key={loc.id}
                  transform={`translate(${loc.x}, ${loc.y})`}
                  onMouseEnter={() => setHoveredPoint(loc)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  onClick={() => setVisibleCount(index + 1)}
                  style={{ cursor: 'pointer' }}
                >
                  <g
                    transform={isLatest || isHovered ? "translate(-16, -38) scale(1.18)" : "translate(-16, -34) scale(1)"}
                    style={{ transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                  >
                    <path
                      d="M16 0C7.163 0 0 7.163 0 16c0 12 16 32 16 32s16-20 16-32c0-8.837-7.163-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                      fill="#f9b933"
                      stroke="#1a1854"
                      strokeWidth="2"
                    />
                  </g>

                  {isHovered && (
                    <g transform="translate(0, -50)">
                      <rect
                        x="-65"
                        y="-28"
                        width="130"
                        height="30"
                        rx="4"
                        fill="#1a1854"
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                      <text
                        x="0"
                        y="-10"
                        fill="#ffffff"
                        fontSize="12"
                        fontWeight="800"
                        textAnchor="middle"
                      >
                        {loc.name}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* BOTTOM ICON CONTROL BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '36px' }}>
          
          {/* Custom Play/Pause Button */}
          <button
            onClick={() => {
              if (showAllMarked) {
                handlePlaySequence();
              } else {
                setClickedButton('play');
                setIsPlaying(!isPlaying);
                setTimeout(() => setClickedButton(null), 300);
              }
            }}
            title={isPlaying && !showAllMarked ? "Pause Sequence" : "Play Sequence"}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: '#f9b933',
              color: '#1a1854',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'none',
              transform: clickedButton === 'play' ? 'scale(0.88)' : 'scale(1)',
              transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), backgroundColor 0.2s ease'
            }}
            onMouseOver={(e) => {
              if (clickedButton !== 'play') (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseOut={(e) => {
              if (clickedButton !== 'play') (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            {isPlaying && !showAllMarked ? (
              <Pause size={22} fill="#1a1854" stroke="none" />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="#1a1854" />
              </svg>
            )}
          </button>

          {/* Custom Show All Locations Reset Button */}
          <button
            onClick={handleShowAll}
            title="Show All Locations"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: showAllMarked ? '#1a1854' : '#f1f5f9',
              color: showAllMarked ? '#ffffff' : '#1a1854',
              border: '2px solid #1a1854',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'none',
              transform: clickedButton === 'reset' ? 'rotate(180deg) scale(0.88)' : 'scale(1)',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), backgroundColor 0.2s ease'
            }}
            onMouseOver={(e) => {
              if (clickedButton !== 'reset') (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseOut={(e) => {
              if (clickedButton !== 'reset') (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            <RotateCcw size={20} strokeWidth={2.5} />
          </button>

        </div>

      </div>

      {/* Embedded CSS for 60fps Ultra-Fast Line Flow */}
      <style jsx global>{`
        @keyframes lineFlow {
          from {
            stroke-dashoffset: 32;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};
