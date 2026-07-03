import Link from "next/link";
import Pennant from "./Pennant";

const serif = "var(--font-dm-serif), serif";
const oswald = "var(--font-oswald), sans-serif";

export function LegalShell({
  eyebrow,
  title,
  current,
  children,
}: {
  eyebrow: string;
  title: string;
  current: "terms" | "privacy";
  children: React.ReactNode;
}) {
  const footerItem = {
    fontFamily: oswald,
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: ".14em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
  };
  return (
    <>
      {/* nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(240,229,207,.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--divider)",
        }}
      >
        <div
          className="pad-40"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "16px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ fontFamily: serif, fontSize: 24, color: "var(--green)", textDecoration: "none" }}>
            CourseMate
          </Link>
          <Link
            href="/"
            style={{
              fontFamily: oswald,
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            &larr; Back to site
          </Link>
        </div>
      </nav>

      <div className="pad-40" style={{ maxWidth: 780, margin: "0 auto", padding: "64px 40px 40px" }}>
        <div
          style={{
            fontFamily: oswald,
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "var(--orange)",
          }}
        >
          {eyebrow}
        </div>
        <h1
          className="legal-h1"
          style={{ fontFamily: serif, fontSize: 52, lineHeight: 1, color: "var(--ink)", margin: "14px 0 0" }}
        >
          {title}
        </h1>
        <div
          style={{
            fontFamily: oswald,
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginTop: 14,
          }}
        >
          Last updated · 3 July 2026
        </div>

        <Pennant margin="28px 0 36px" />

        {children}
      </div>

      {/* footer */}
      <footer style={{ borderTop: "1px solid var(--divider)", marginTop: 24 }}>
        <div
          className="pad-40"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "26px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <Link href="/" style={{ fontFamily: serif, fontSize: 19, color: "var(--green)", textDecoration: "none" }}>
            CourseMate
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {current === "terms" ? (
              <span style={{ ...footerItem, fontWeight: 600, color: "var(--ink)" }}>Terms of Service</span>
            ) : (
              <Link href="/terms" className="footer-link" style={{ ...footerItem, color: "var(--muted2)", transition: "color .2s ease" }}>
                Terms of Service
              </Link>
            )}
            {current === "privacy" ? (
              <span style={{ ...footerItem, fontWeight: 600, color: "var(--ink)" }}>Privacy Policy</span>
            ) : (
              <Link href="/privacy" className="footer-link" style={{ ...footerItem, color: "var(--muted2)", transition: "color .2s ease" }}>
                Privacy Policy
              </Link>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: serif, fontSize: 26, color: "var(--green)", margin: "36px 0 12px" }}>{children}</h2>
  );
}

export function P({
  children,
  size = 15.5,
  marginBottom = 12,
}: {
  children: React.ReactNode;
  size?: number;
  marginBottom?: number;
}) {
  return (
    <p style={{ fontSize: size, lineHeight: 1.7, color: "var(--bodysoft)", margin: `0 0 ${marginBottom}px` }}>
      {children}
    </p>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "0 0 12px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
          <span
            style={{
              width: 6,
              height: 6,
              background: "var(--orange)",
              borderRadius: "50%",
              flex: "none",
              marginTop: 8,
            }}
          />
          <span style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--bodysoft)" }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: "var(--ink)" }}>{children}</strong>;
}

export function SupportEmail() {
  return (
    <a
      href="mailto:support@coursemate.golf"
      style={{ color: "var(--green)", fontWeight: 600, textDecoration: "none" }}
    >
      support@coursemate.golf
    </a>
  );
}
