import { useEffect, useRef, useState } from "react";

interface DriftItem {
  image: string;
  title: string;
  href?: string;
}

interface DriftWallProps {
  items: DriftItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  tilt?: number;
  turn?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: "up" | "down";
  variance?: number;
  parallax?: number;
  lift?: number;
  fade?: number;
  dim?: number;
  overlayColor?: string;
  radius?: number;
  roll?: number;
  pauseOnHover?: boolean;
  grayscale?: boolean;
}

interface TileData {
  item: DriftItem;
  col: number;
  offset: number; // initial y offset per column (px)
}

export default function DriftWall({
  items,
  columns = 5,
  tileWidth = 200,
  tileHeight = 132,
  gap = 18,
  tilt = 16,
  turn = -14,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = "up",
  variance = 0.45,
  parallax = 0.6,
  lift = 64,
  fade = 0.6,
  dim = 0.55,
  overlayColor = "#060010",
  radius = 14,
  pauseOnHover = false,
  grayscale = false,
}: DriftWallProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const scrollY = useRef(0);
  const paused = useRef(false);
  const [offsets, setOffsets] = useState<number[]>([]);

  // Build tile list: fill columns with items (repeating)
  const tiles: TileData[] = [];
  // How many tiles per column to fill the visible area comfortably
  const tilesPerCol = Math.ceil(items.length / columns) + 4;

  for (let col = 0; col < columns; col++) {
    // Stagger initial offset per column using variance
    const initOffset = col * (tileHeight + gap) * variance;
    for (let row = 0; row < tilesPerCol; row++) {
      const idx = (col * tilesPerCol + row) % items.length;
      tiles.push({ item: items[idx], col, offset: initOffset });
    }
  }

  useEffect(() => {
    // Per-column y positions
    const yPos = Array.from({ length: columns }, (_, col) => {
      return col * (tileHeight + gap) * variance;
    });
    setOffsets([...yPos]);

    const colHeight = tilesPerCol * (tileHeight + gap);
    let lastTime = performance.now();

    const animate = (now: number) => {
      if (!paused.current) {
        const dt = (now - lastTime) / 1000; // seconds
        lastTime = now;

        for (let col = 0; col < columns; col++) {
          const colSpeed = speed * (1 + col * 0.06); // slight speed variance per col
          if (direction === "up") {
            yPos[col] -= colSpeed * dt;
          } else {
            yPos[col] += colSpeed * dt;
          }
          // Wrap around
          yPos[col] = ((yPos[col] % colHeight) + colHeight) % colHeight;
        }
        setOffsets([...yPos]);
      } else {
        lastTime = now;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [columns, tileHeight, gap, variance, speed, direction, tilesPerCol]);

  const colWidth = tileWidth;
  const totalWidth = columns * colWidth + (columns - 1) * gap;
  const containerHeight = "100%";

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: containerHeight,
        overflow: "hidden",
        position: "relative",
        perspective: `${perspective}px`,
        perspectiveOrigin: "50% 50%",
      }}
      onMouseEnter={() => { if (pauseOnHover) paused.current = true; }}
      onMouseLeave={() => { if (pauseOnHover) paused.current = false; }}
    >
      {/* Overlay gradient for fade effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          background: `linear-gradient(
            to bottom,
            ${overlayColor}cc 0%,
            transparent ${fade * 100 * 0.4}%,
            transparent ${100 - fade * 100 * 0.4}%,
            ${overlayColor}cc 100%
          )`,
        }}
      />

      {/* 3D tilted wall */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${totalWidth}px`,
          transform: `
            translate(-50%, -50%)
            rotateX(${tilt}deg)
            rotateY(${turn}deg)
            translateZ(${-depth}px)
          `,
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: columns }, (_, col) => {
          const colX = col * (colWidth + gap);
          const yOffset = offsets[col] ?? 0;
          // Gather tiles for this column
          const colTiles = tiles.filter((t) => t.col === col);
          const colHeight = tilesPerCol * (tileHeight + gap);

          return (
            <div
              key={col}
              style={{
                position: "absolute",
                left: `${colX}px`,
                top: 0,
                width: `${colWidth}px`,
                height: `${colHeight}px`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Render tiles twice for seamless loop */}
              {[0, 1].map((pass) =>
                colTiles.map((tile, row) => {
                  const y = pass * colHeight + row * (tileHeight + gap) - yOffset;
                  // Only render if roughly in visible range
                  const visMin = -tileHeight * 2;
                  const visMax = colHeight + tileHeight * 2;
                  if (y < visMin || y > visMax) return null;

                  return (
                    <div
                      key={`${pass}-${row}`}
                      style={{
                        position: "absolute",
                        top: `${y}px`,
                        width: `${colWidth}px`,
                        height: `${tileHeight}px`,
                        borderRadius: `${radius}px`,
                        overflow: "hidden",
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${lift * (col / (columns - 1) - 0.5)}px)`,
                        transition: "transform 0.3s ease",
                        cursor: tile.item.href ? "pointer" : "default",
                      }}
                      onClick={() => tile.item.href && window.open(tile.item.href, "_blank")}
                    >
                      <img
                        src={tile.item.image}
                        alt={tile.item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          filter: grayscale ? "grayscale(1)" : "none",
                        }}
                        loading="lazy"
                        draggable={false}
                      />
                      {/* Dim overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `${overlayColor}`,
                          opacity: dim * 0.5,
                          pointerEvents: "none",
                        }}
                      />
                      {/* Title label */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "6px 10px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          pointerEvents: "none",
                        }}
                      >
                        {tile.item.title}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
