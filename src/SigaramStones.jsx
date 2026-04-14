import { useState } from "react";

const granites = [
  {
    name: "Black Galaxy",
    origin: "Andhra Pradesh, India",
    desc: "Jet-black with golden copper speckles — like a starlit sky. Perfect for countertops and feature walls.",
    tag: "Bestseller",
    color: "#0a0a0a",
    accent: "#c9a84c",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Kashmir White",
    origin: "Tamil Nadu, India",
    desc: "Ivory base with graceful grey veins and burgundy feldspar crystals. Elegant and versatile.",
    tag: "Popular",
    color: "#e8e0d0",
    accent: "#8b6347",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Tan Brown",
    origin: "Andhra Pradesh, India",
    desc: "Rich chocolate brown with black and grey mineral specks. Durable and warm for kitchens and flooring.",
    tag: "Heavy Duty",
    color: "#5c3d28",
    accent: "#c9a84c",
    img: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Steel Grey",
    origin: "Karnataka, India",
    desc: "Fine-grained uniform grey with mirror polish. A modern classic that pairs with steel and white cabinetry.",
    tag: "Modern Pick",
    color: "#4a4a4a",
    accent: "#a0c0d0",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Absolute Black",
    origin: "Karnataka, India",
    desc: "Pure uniform black with zero pattern variation. High-gloss finish creates a dramatic luxurious effect.",
    tag: "Luxury",
    color: "#050505",
    accent: "#e0e0e0",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Bianco Antico",
    origin: "Brazil",
    desc: "Creamy white with grey, burgundy, and black speckles. A favourite for bathroom vanities and kitchen islands.",
    tag: "Fan Favourite",
    color: "#d8d0c0",
    accent: "#8b6347",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Multicolor Red",
    origin: "Rajasthan, India",
    desc: "Fiery red and burgundy tones with black and grey contrasts. Bold, warm, and full of personality.",
    tag: "Bold Choice",
    color: "#8b3a3a",
    accent: "#f0c060",
    img: "https://images.unsplash.com/photo-1550505095-81378a674395?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Viscount White",
    origin: "Brazil",
    desc: "White and silver-grey waves create a flowing marbled look. Sought after for statement countertops.",
    tag: "Premium",
    color: "#c8c0b0",
    accent: "#6a8070",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Baltic Brown",
    origin: "Finland",
    desc: "Deep brown and black crystals with warm amber tones. Exceptionally dense and frost-resistant.",
    tag: "Imported",
    color: "#4a3020",
    accent: "#c9a84c",
    img: "https://images.unsplash.com/photo-1543489822-c49534f3271f?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Colonial White",
    origin: "Brazil",
    desc: "Light grey-white background with dark mineral clusters in an almost leopard-print fashion.",
    tag: "Trending",
    color: "#e0d8c8",
    accent: "#5a5a5a",
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Verde Butterfly",
    origin: "Brazil",
    desc: "Lush greens and blacks in a unique butterfly-wing pattern. Rare and eye-catching.",
    tag: "Rare Find",
    color: "#2d4a2d",
    accent: "#90c060",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Rosy Pink",
    origin: "Rajasthan, India",
    desc: "Delicate blush pink with white and grey mineral patterns. Ideal for bathrooms and decorative panels.",
    tag: "Decorative",
    color: "#c49090",
    accent: "#8b4060",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop&q=80",
  },
];

const tagColors = {
  "Bestseller":    "#c9a84c",
  "Popular":       "#7aab8a",
  "Heavy Duty":    "#8a7aab",
  "Modern Pick":   "#5a9ab8",
  "Luxury":        "#c0c0c0",
  "Fan Favourite": "#c97a5a",
  "Bold Choice":   "#c95a5a",
  "Premium":       "#9ab8c0",
  "Imported":      "#b8a06a",
  "Trending":      "#7ab8a0",
  "Rare Find":     "#7aab7a",
  "Decorative":    "#c97a9a",
};

export default function SigaramStones() {
  const [hovered, setHovered] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#111009",
        minHeight: "100vh",
        color: "#f0ece4",
      }}
    >
      {/* Google Fonts + global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111009; }
        .granite-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .granite-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.7); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
      `}</style>

      {/* ── COVER ── */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 40px",
          background:
            "radial-gradient(ellipse at top left, rgba(201,168,76,0.10) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(201,168,76,0.07) 0%, transparent 55%), #111009",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(201,168,76,0.04) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(201,168,76,0.04) 60px)",
          }}
        />

        {/* Corner brackets */}
        {[
          { top: 28, left: 28,  borderWidth: "2px 0 0 2px" },
          { top: 28, right: 28, borderWidth: "2px 2px 0 0" },
          { bottom: 28, left: 28,  borderWidth: "0 0 2px 2px" },
          { bottom: 28, right: 28, borderWidth: "0 2px 2px 0" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 44,
              height: 44,
              borderStyle: "solid",
              borderColor: "#c9a84c",
              ...s,
            }}
          />
        ))}

        <p
          className="fade-up"
          style={{
            fontFamily: "'Jost',sans-serif",
            fontWeight: 300,
            fontSize: "0.7rem",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: 24,
          }}
        >
          Premium Natural Stone
        </p>

        <h1
          className="fade-up"
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(3rem,10vw,5.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#f0ece4",
            animationDelay: "0.1s",
          }}
        >
          The Granite
        </h1>

        <h1
          className="fade-up"
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(3rem,10vw,5.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#c9a84c",
            marginBottom: 8,
            animationDelay: "0.2s",
          }}
        >
          Collection
        </h1>

        <div
          style={{
            width: 80,
            height: 1,
            background: "linear-gradient(90deg,transparent,#c9a84c,transparent)",
            margin: "28px auto",
          }}
        />

        <p
          className="fade-up"
          style={{
            fontFamily: "'Jost',sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            letterSpacing: "0.15em",
            color: "#c8c4bc",
            maxWidth: 360,
            lineHeight: 1.9,
            animationDelay: "0.3s",
          }}
        >
          Handpicked from the world's finest quarries.
          <br />
          Timeless beauty forged in stone.
        </p>

        <div
          className="fade-up"
          style={{
            marginTop: 44,
            display: "inline-block",
            border: "1px solid #c9a84c",
            color: "#c9a84c",
            fontFamily: "'Jost',sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            padding: "11px 32px",
            animationDelay: "0.4s",
          }}
        >
          Sigaram Stones
        </div>
      </div>

      {/* ── INFO BAR ── */}
      <div
        style={{
          background: "#1e1a14",
          borderTop: "1px solid rgba(201,168,76,0.25)",
          borderBottom: "1px solid rgba(201,168,76,0.25)",
          padding: "22px 40px",
          display: "flex",
          justifyContent: "center",
          gap: 56,
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {[
          ["Company",  "Sigaram Stones"],
          ["Location", "Kallimandayam, Dindigul"],
          ["State",    "Tamil Nadu, India"],
          ["Phone",    "Add Your Number"],
        ].map(([label, value]) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: 4,
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "0.88rem",
                color: "#f0ece4",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* ── SECTION HEADER ── */}
      <div style={{ textAlign: "center", padding: "64px 40px 36px" }}>
        <p
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: 14,
          }}
        >
          Our Collection
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(1.8rem,5vw,3rem)",
            fontWeight: 700,
            color: "#f0ece4",
          }}
        >
          Granite Varieties
        </h2>
        <div
          style={{
            width: 80,
            height: 1,
            background: "linear-gradient(90deg,transparent,#c9a84c,transparent)",
            margin: "20px auto 0",
          }}
        />
      </div>

      {/* ── GRANITE GRID ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
          gap: 3,
          padding: "0 3px 3px",
          maxWidth: 1300,
          margin: "0 auto",
        }}
      >
        {granites.map((g, i) => (
          <div
            key={g.name}
            className="granite-card"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "4/3",
              cursor: "pointer",
              background: g.color,
            }}
          >
            {!imgErrors[g.name] ? (
              <img
                src={g.img}
                alt={g.name}
                onError={() => handleImgError(g.name)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease, filter 0.4s ease",
                  transform: hovered === i ? "scale(1.07)" : "scale(1)",
                  filter: hovered === i ? "brightness(1)" : "brightness(0.75)",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, ${g.color}, #1a1612)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: g.accent,
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.1rem",
                    opacity: 0.6,
                  }}
                >
                  {g.name}
                </span>
              </div>
            )}

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  hovered === i
                    ? "linear-gradient(to top, rgba(10,8,4,0.97) 0%, rgba(10,8,4,0.45) 60%, transparent 100%)"
                    : "linear-gradient(to top, rgba(10,8,4,0.90) 0%, rgba(10,8,4,0.15) 55%, transparent 100%)",
                transition: "background 0.4s",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "20px 18px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#f0ece4",
                  marginBottom: 3,
                  lineHeight: 1.2,
                }}
              >
                {g.name}
              </div>
              <div
                style={{
                  fontFamily: "'Jost',sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: hovered === i ? 8 : 0,
                }}
              >
                {g.origin}
              </div>
              {hovered === i && (
                <div
                  style={{
                    fontFamily: "'Jost',sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 300,
                    color: "#c8c4bc",
                    lineHeight: 1.65,
                    marginBottom: 10,
                  }}
                >
                  {g.desc}
                </div>
              )}
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: `1px solid ${tagColors[g.tag] || "#c9a84c"}`,
                  color: tagColors[g.tag] || "#c9a84c",
                  padding: "3px 10px",
                  alignSelf: "flex-start",
                }}
              >
                {g.tag}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#1e1a14",
          borderTop: "1px solid rgba(201,168,76,0.25)",
          padding: "52px 40px",
          textAlign: "center",
          marginTop: 60,
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#f0ece4",
            marginBottom: 6,
          }}
        >
          Sigaram Stones
        </div>
        <div
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: 32,
          }}
        >
          Natural Stone · Expert Craftsmanship · Lifetime Beauty
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 52,
            flexWrap: "wrap",
            marginBottom: 30,
          }}
        >
          {[
            ["Address", "Kallimandayam, Dindigul District"],
            ["State",   "Tamil Nadu, India"],
            ["Phone",   "Add Your Number"],
            ["Email",   "Add Your Email"],
          ].map(([label, value]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Jost',sans-serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  marginBottom: 4,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "'Jost',sans-serif",
                  fontSize: "0.88rem",
                  color: "#c8c4bc",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: 80,
            height: 1,
            background: "linear-gradient(90deg,transparent,#c9a84c,transparent)",
            margin: "0 auto 20px",
          }}
        />
        <p
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: "0.68rem",
            color: "rgba(200,196,188,0.35)",
            letterSpacing: "0.1em",
          }}
        >
          © 2026 Sigaram Stones, Kallimandayam, Dindigul. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
