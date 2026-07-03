export default function Pennant({ margin = "8px 0 0" }: { margin?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin }}>
      <span style={{ flex: 1, height: 3, background: "var(--green)" }} />
      <span
        style={{
          width: 0,
          height: 0,
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderLeft: "11px solid var(--orange)",
        }}
      />
      <span style={{ flex: 1, height: 3, background: "var(--green)" }} />
    </div>
  );
}
