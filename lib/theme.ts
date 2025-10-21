export const colors = {
  bg: "#0B1220",
  card: "#121A2B",
  text: "#E6EAF2",
  subtext: "#A9B2C7",
  primary: "#4F8BFF",
  danger: "#FF6B6B",
  border: "rgba(255,255,255,0.08)",
  inputBg: "rgba(255,255,255,0.06)",
  inputBorder: "rgba(255,255,255,0.12)",
} as const;

export const spacing = { xs: 6, sm: 10, md: 16, lg: 20, xl: 28 } as const;
export const radius = { sm: 10, md: 14, lg: 20, pill: 999 } as const;

// Give fontWeight literal types so RN accepts them.
export const type = {
  h1: { fontSize: 28, fontWeight: "700" as const, letterSpacing: 0.2 },
  h2: { fontSize: 20, fontWeight: "600" as const, letterSpacing: 0.2 },
  body: { fontSize: 16, fontWeight: "400" as const },
  small: { fontSize: 13, fontWeight: "400" as const },
} as const;