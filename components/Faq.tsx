"use client";

import { useState } from "react";

const faqData = [
  {
    q: "Do I need an account?",
    a: "Yes — a quick free account lets you add friends, invite them to a game instantly, and see how your stats stack up against your mates.",
  },
  {
    q: "How do my mates join a round?",
    a: "Invite friends straight from your friends list, or share the room code for them to punch in. Everyone scores on their own phone and the card updates live for the whole group.",
  },
  {
    q: "Which courses are included?",
    a: "Over 22,000 courses around the world, with holes, distances and par. Playing somewhere that isn’t listed? Add it manually and start playing.",
  },
  {
    q: "What can I play?",
    a: "Stroke play, Stableford, four-ball or Ambrose, over front 9, back 9 or the full 18, solo or with a full group. Anyone can play any format they’re invited to — creating rounds in formats beyond stroke play is a Pro feature.",
  },
  {
    q: "Is it free?",
    a: "Yes — the core is free forever: solo and multiplayer rounds, stroke play, 22,000+ courses, one-tap scoring, your auto handicap and the Clubhouse. CourseMate Pro adds deeper insight stats, the ability to create rounds in every game format, unlimited history and Pro shot-by-shot scoring.",
  },
  {
    q: "iPhone and Android?",
    a: "Both. Grab CourseMate from the App Store or Google Play and you’re set.",
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {faqData.map((f, i) => {
        const open = openFaq === i;
        return (
          <div
            key={f.q}
            style={{
              background: "#fff",
              border: "1.5px solid var(--ink)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenFaq((s) => (s === i ? null : i))}
              aria-expanded={open}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                background: "none",
                border: "none",
                padding: "20px 26px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: 21, color: "var(--green)" }}>
                {f.q}
              </span>
              <span
                style={{
                  display: "inline-block",
                  flex: "none",
                  fontFamily: "var(--font-hanken), sans-serif",
                  fontWeight: 300,
                  fontSize: 30,
                  lineHeight: 1,
                  color: "#C56A28",
                  transition: "transform .3s ease",
                  transform: open ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div className={`faq-body${open ? " open" : ""}`}>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--bodysoft)",
                  margin: 0,
                  padding: "0 26px 22px",
                  maxWidth: 680,
                }}
              >
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
