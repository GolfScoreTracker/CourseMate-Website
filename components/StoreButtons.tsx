const APP_STORE_URL = "https://apps.apple.com/us/app/coursemate/id6752738583";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=golf.coursemate.app";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ flex: "none" }} aria-hidden="true">
      <path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.47 7.83 1.3 10.4.86 1.25 1.89 2.66 3.24 2.61 1.3-.05 1.79-.84 3.36-.84s2.01.84 3.39.81c1.4-.02 2.29-1.28 3.15-2.54.99-1.46 1.4-2.87 1.42-2.94-.03-.02-2.72-1.05-2.75-4.14zM14.9 4.6c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.68-3.02 1.55-.66.77-1.24 2-1.09 3.18 1.15.09 2.32-.58 3.06-1.45z" />
    </svg>
  );
}

function AndroidIcon({ eyeFill }: { eyeFill: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" style={{ flex: "none" }} aria-hidden="true">
      <line x1="7.4" y1="2.7" x2="8.9" y2="4.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="16.6" y1="2.7" x2="15.1" y2="4.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4.4 11a7.6 7.6 0 0 1 15.2 0z" fill="currentColor" />
      <circle cx="9" cy="7.9" r="1" fill={eyeFill} />
      <circle cx="15" cy="7.9" r="1" fill={eyeFill} />
      <rect x="4.4" y="12" width="15.2" height="7.5" rx="1.6" fill="currentColor" />
      <rect x="2" y="12.4" width="2.5" height="6.2" rx="1.25" fill="currentColor" />
      <rect x="19.5" y="12.4" width="2.5" height="6.2" rx="1.25" fill="currentColor" />
      <rect x="7.6" y="19" width="2.3" height="4" rx="1.15" fill="currentColor" />
      <rect x="14.1" y="19" width="2.3" height="4" rx="1.15" fill="currentColor" />
    </svg>
  );
}

function Label({ top, bottom, topOpacity }: { top: string; bottom: string; topOpacity: number }) {
  return (
    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, textAlign: "left" }}>
      <span
        className="store-top"
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          fontWeight: 500,
          fontSize: 9,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          opacity: topOpacity,
        }}
      >
        {top}
      </span>
      <span className="store-name" style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: 18 }}>
        {bottom}
      </span>
    </span>
  );
}

export default function StoreButtons({ variant }: { variant: "ink" | "paper" }) {
  const style: React.CSSProperties =
    variant === "ink"
      ? {
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "11px 22px",
          borderRadius: 12,
          textDecoration: "none",
          transition: "transform .15s ease",
        }
      : {
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: "var(--paper)",
          color: "var(--ink)",
          padding: "12px 24px",
          borderRadius: 12,
          textDecoration: "none",
          transition: "transform .15s ease",
        };
  const topOpacity = variant === "ink" ? 0.82 : 0.7;
  const eyeFill = variant === "ink" ? "var(--ink)" : "var(--paper)";

  return (
    <>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="btn-store"
        style={style}
      >
        <AppleIcon />
        <Label top="Download on the" bottom="App Store" topOpacity={topOpacity} />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="btn-store"
        style={style}
      >
        <AndroidIcon eyeFill={eyeFill} />
        <Label top="Get it on" bottom="Google Play" topOpacity={topOpacity} />
      </a>
    </>
  );
}
