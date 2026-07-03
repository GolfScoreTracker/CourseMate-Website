import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/Faq";
import HomeEffects from "@/components/HomeEffects";
import Pennant from "@/components/Pennant";
import StoreButtons from "@/components/StoreButtons";

const serif = "var(--font-dm-serif), serif";
const oswald = "var(--font-oswald), sans-serif";

const navlinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
];

const features: { tag: string; title: string; body: string; pro?: boolean }[] = [
  {
    tag: "Mates",
    title: "Play with your mates",
    body: "Invite friends from your list or share a room code. Every score updates for the whole group, live.",
  },
  {
    tag: "Clubhouse",
    title: "Cheer on your mates",
    body: "Like and comment on your mates’ rounds and achievements — a bit of banter earned after every card.",
  },
  {
    tag: "Formats",
    title: "Play it your way",
    pro: true,
    body: "Create rounds in Stableford, four-ball or Ambrose with Pro. Invited mates can play any format for free.",
  },
  {
    tag: "Handicap",
    title: "A handicap that keeps up",
    body: "Play three rounds and CourseMate works out your handicap automatically, so mates of every level get a fair game.",
  },
  {
    tag: "Courses",
    title: "Every course, on hand",
    body: "Over 22,000 courses worldwide with accurate holes, distances and par. Not there? Add yours and tee off.",
  },
  {
    tag: "Rounds",
    title: "Front nine or the full lap",
    body: "Front 9, back 9 or all 18. Choose your tees — we keep the card for you.",
  },
  {
    tag: "Scoring",
    title: "Score in a single tap",
    body: "Simple plus and minus with haptics. Fix a slip and track your card hole by hole.",
  },
  {
    tag: "Summary",
    title: "The card, read back",
    body: "Birdies, pars, bogeys and your run of form — every round summarised clean.",
  },
  {
    tag: "No fuss",
    title: "Set up in seconds",
    body: "Start a round, gather the group and tap your way round. No clutter, no faff.",
  },
];

const steps = [
  {
    n: "01",
    title: "Start a round",
    body: "Solo or with mates. Pick your course, format and tees.",
    img: "/images/course-setup.jpg",
    alt: "Start a round",
    aspect: "1080/2401",
  },
  {
    n: "02",
    title: "Tap your score",
    body: "Hole by hole, one tap. Undo a slip in a second.",
    img: "/images/scoring.jpg",
    alt: "Tap your score",
    aspect: "1080/2409",
  },
  {
    n: "03",
    title: "Read the card",
    body: "Winner, stats and bragging rights — all sorted.",
    img: "/images/round-summary.jpg",
    alt: "Read the card",
    aspect: "1080/2419",
  },
];

const freePlan = [
  "Solo & multiplayer rounds",
  "Create stroke-play rounds",
  "Join any format you’re invited to",
  "22,000+ courses worldwide",
  "One-tap scoring & undo",
  "Auto handicap after 3 rounds",
  "Your last 3 rounds & summaries",
  "Like & comment in the Clubhouse",
];

const proPlan = [
  "Deeper insight stats",
  "Create rounds in any format — Stableford, four-ball & Ambrose",
  "Unlimited round history",
  "Pro scoring — drives, irons & putts per hole",
];

function SectionHeading({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34 }}>
      <span
        style={{
          fontFamily: oswald,
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "var(--ink)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span style={{ flex: 1, height: 2, background: "var(--divider)" }} />
    </div>
  );
}

function Check({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" style={{ flex: "none", marginTop: 2 }} aria-hidden="true">
      <path d="M3 8.4l3.1 3.1L13 4.8" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stripes = {
  position: "absolute" as const,
  inset: 0,
  background: "repeating-linear-gradient(135deg, transparent 0 18px, rgba(240,229,207,.05) 18px 36px)",
};

export default function Home() {
  return (
    <>
      <HomeEffects />

      {/* ===== NAV ===== */}
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
          <a href="#top" style={{ fontFamily: serif, fontSize: 24, color: "var(--green)", textDecoration: "none" }}>
            CourseMate
          </a>
          <div
            className="nav-links"
            style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", gap: 34, margin: "0 28px" }}
          >
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-nav="true"
                style={{
                  fontFamily: oswald,
                  fontWeight: 500,
                  fontSize: 12.5,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  textDecoration: "none",
                  paddingBottom: 3,
                  borderBottom: "2px solid transparent",
                  transition: "color .2s ease, border-color .2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#download"
            className="btn-cta"
            style={{
              fontFamily: oswald,
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--paper)",
              background: "var(--green)",
              padding: "12px 22px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "transform .15s ease, background .2s ease",
            }}
          >
            Get the app
          </a>
        </div>
      </nav>

      <div id="top" className="pad-40" style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>
        {/* ===== HERO ===== */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr .85fr",
            gap: 48,
            alignItems: "center",
            padding: "68px 0 44px",
          }}
        >
          <div>
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
              Golf Scoring · Made Social
            </div>
            <h1
              className="hero-h1"
              style={{
                fontFamily: serif,
                fontSize: 66,
                lineHeight: 0.98,
                color: "var(--ink)",
                margin: "16px 0 0",
                letterSpacing: "-.01em",
              }}
            >
              Golf&rsquo;s better <span style={{ color: "var(--green)", fontStyle: "italic" }}>with mates.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--bodysoft)", maxWidth: 460, margin: "22px 0 0" }}>
              CourseMate keeps your card, plays nice with the group, and reads the round back to you — no faff. Set up
              in seconds and get back to the swing of things.
            </p>
            <div className="store-row" style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              <StoreButtons variant="ink" />
            </div>
            <div
              className="hero-note"
              style={{
                fontFamily: oswald,
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: 18,
              }}
            >
              Free to play · iPhone &amp; Android
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 294,
                background: "#141210",
                borderRadius: 46,
                padding: 10,
                boxShadow: "0 40px 70px -30px rgba(58,36,23,.55)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 37,
                  overflow: "hidden",
                  aspectRatio: "1080/2372",
                  background: "var(--paper)",
                }}
              >
                <Image
                  src="/images/app-home.jpg"
                  alt="CourseMate app home screen"
                  fill
                  sizes="294px"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* pennant divider */}
        <Pennant margin="8px 0 0" />

        {/* ===== FEATURES ===== */}
        <section id="features" data-reveal="true" style={{ padding: "64px 0 20px" }}>
          <SectionHeading label="Everything for a better round" />
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {features.map((f) => (
              <div
                key={f.tag}
                className="feature-card"
                style={{
                  background: "#fff",
                  border: "1.5px solid var(--ink)",
                  borderRadius: 12,
                  padding: "24px 24px 26px",
                  transition: "transform .18s ease, box-shadow .18s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    paddingBottom: 14,
                    borderBottom: "1.5px dashed var(--dash)",
                    marginBottom: 16,
                  }}
                >
                  <span style={{ width: 6, height: 6, background: "var(--orange)", borderRadius: "50%" }} />
                  <span
                    style={{
                      fontFamily: oswald,
                      fontWeight: 600,
                      fontSize: 11,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "var(--orange)",
                    }}
                  >
                    {f.tag}
                  </span>
                  {f.pro && (
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: oswald,
                        fontWeight: 600,
                        fontSize: 9,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: "var(--paper)",
                        background: "var(--green)",
                        padding: "3px 8px",
                        borderRadius: 5,
                      }}
                    >
                      Pro
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: serif, fontSize: 23, lineHeight: 1.05, color: "var(--green)", margin: "0 0 10px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--bodysoft)", margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how" data-reveal="true" style={{ padding: "56px 0 20px" }}>
          <div
            style={{
              fontFamily: oswald,
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 6,
            }}
          >
            Tee it up
          </div>
          <h2 style={{ fontFamily: serif, fontSize: 40, color: "var(--ink)", margin: "0 0 34px" }}>
            Three taps to a card
          </h2>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {steps.map((step) => (
              <div key={step.n} style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: 216,
                    margin: "0 auto 26px",
                    background: "#141210",
                    borderRadius: 38,
                    padding: 8,
                    boxShadow: "0 30px 55px -28px rgba(58,36,23,.5)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 31,
                      overflow: "hidden",
                      aspectRatio: step.aspect,
                      background: "var(--paper)",
                    }}
                  >
                    <Image src={step.img} alt={step.alt} fill sizes="216px" style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "2px solid var(--ink)",
                    paddingTop: 16,
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                  }}
                >
                  <span style={{ fontFamily: serif, fontSize: 44, lineHeight: 0.9, color: "var(--orange)", flex: "none" }}>
                    {step.n}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: serif, fontSize: 22, color: "var(--green)", margin: "0 0 6px" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--bodysoft)", margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" data-reveal="true" style={{ padding: "60px 0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <span
              style={{
                fontFamily: oswald,
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--ink)",
                whiteSpace: "nowrap",
              }}
            >
              Common questions
            </span>
            <span style={{ flex: 1, height: 2, background: "var(--divider)" }} />
          </div>
          <Faq />
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" data-reveal="true" style={{ padding: "60px 0 20px" }}>
          <SectionHeading label="Free & Pro" />
          <div
            className="pricing-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch" }}
          >
            {/* FREE */}
            <div
              style={{
                background: "#fff",
                border: "1.5px solid var(--ink)",
                borderRadius: 14,
                padding: 34,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: oswald,
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                }}
              >
                The basics
              </div>
              <div style={{ fontFamily: serif, fontSize: 44, lineHeight: 1, color: "var(--ink)", margin: "10px 0 0" }}>
                Free
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--bodysoft)", margin: "8px 0 0" }}>
                Everything you need to keep score and play with your mates. Free forever.
              </p>
              <div style={{ borderTop: "1.5px dashed var(--dash)", margin: "22px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {freePlan.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                    <Check color="#2E5E3A" />
                    <span style={{ fontSize: 14.5, lineHeight: 1.4, color: "var(--ink)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  marginTop: "auto",
                  paddingTop: 26,
                  textAlign: "center",
                  fontFamily: oswald,
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 0,
                }}
              >
                Free forever · no card required
              </p>
            </div>

            {/* PRO */}
            <div
              style={{
                background: "var(--green)",
                borderRadius: 14,
                padding: 34,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={stripes} />
              <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
                <div
                  style={{
                    fontFamily: oswald,
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  Level up
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, margin: "10px 0 0" }}>
                  <span style={{ fontFamily: serif, fontSize: 44, lineHeight: 1, color: "var(--paper)" }}>Pro</span>
                  <span
                    style={{
                      fontFamily: oswald,
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      background: "var(--gold)",
                      padding: "4px 9px",
                      borderRadius: 5,
                    }}
                  >
                    30-day free trial
                  </span>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "rgba(240,229,207,.85)", margin: "8px 0 0" }}>
                  For the golfer who wants the full picture of every round.
                </p>
                <div style={{ borderTop: "1.5px dashed rgba(240,229,207,.28)", margin: "22px 0" }} />
                <div
                  style={{
                    fontFamily: oswald,
                    fontWeight: 600,
                    fontSize: 10.5,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 15,
                  }}
                >
                  Everything in Free, plus
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                  {proPlan.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                      <Check color="#E6B45A" />
                      <span style={{ fontSize: 14.5, lineHeight: 1.4, color: "var(--paper)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    marginTop: "auto",
                    paddingTop: 26,
                    textAlign: "center",
                    fontFamily: oswald,
                    fontWeight: 500,
                    fontSize: 10,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "rgba(240,229,207,.6)",
                    marginBottom: 0,
                  }}
                >
                  Start your free trial &amp; upgrade inside the app
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DOWNLOAD ===== */}
        <section id="download" data-reveal="true" style={{ padding: "52px 0 68px" }}>
          <div
            className="dl-box"
            style={{
              background: "var(--green)",
              borderRadius: 16,
              padding: "60px 56px",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div style={stripes} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ width: 44, height: 3, background: "var(--gold)" }} />
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    borderLeft: "10px solid var(--orange)",
                  }}
                />
                <span style={{ width: 44, height: 3, background: "var(--gold)" }} />
              </div>
              <h2
                className="dl-h2"
                style={{ fontFamily: serif, fontSize: 46, lineHeight: 1.05, color: "var(--paper)", margin: "0 0 6px" }}
              >
                Start your first round.
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "rgba(240,229,207,.82)",
                  margin: "0 auto 30px",
                  maxWidth: 440,
                }}
              >
                Grab CourseMate on your phone, gather your mates, and let us keep the card.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <StoreButtons variant="paper" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: "1px solid var(--divider)" }}>
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
          <span style={{ fontFamily: serif, fontSize: 19, color: "var(--green)" }}>CourseMate</span>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <Link
              href="/terms"
              className="footer-link"
              style={{
                fontFamily: oswald,
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--muted2)",
                textDecoration: "none",
                transition: "color .2s ease",
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="footer-link"
              style={{
                fontFamily: oswald,
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--muted2)",
                textDecoration: "none",
                transition: "color .2s ease",
              }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
