const paths = {
  compass:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.5 6.5-2 5-5 2 2-5 5-2Z",
  chart: "M4 20V10m6 10V4m6 16v-7",
  spark:
    "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 16l9 5 9-5M3 12l9 5 9-5",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  linkedin:
    "M4.5 4.5h2.9v2.9H4.5V4.5Zm0 4.6h2.9V19.5H4.5V9.1Zm5.4 0h2.8v1.4h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.56 1.97 3.56 4.54v6h-2.9v-5.32c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.81v5.4H9.9V9.1Z",
  mail: "M4 6h16v12H4z M4 6l8 7 8-7",
  check: "M5 13l4 4L19 7",
  quote: "M7 8c-1.7 0-3 1.3-3 3s1.3 3 3 3c0 2-1 3-3 3v2c3.3 0 5-2 5-5V8H7Zm10 0c-1.7 0-3 1.3-3 3s1.3 3 3 3c0 2-1 3-3 3v2c3.3 0 5-2 5-5V8h-2Z",
  chip: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 7h10v10H7V7Zm3 3h4v4h-4v-4Z",
  chatBubble:
    "M4 5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z M13 12h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2l-3-2h-3",
  rocket:
    "M12 2c2.5 2 4 5.5 3 10-1 1-2.5 2-3 2s-2-1-3-2c-1-4.5.5-8 3-10Z M9 15c-1 1-1.5 2.5-1.5 4.5 0 0 2-.5 3-1.5M15 15c1 1 1.5 2.5 1.5 4.5 0 0-2-.5-3-1.5M10.6 9a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0Z",
};

export function Icon({ name, size = 20, strokeWidth = 1.8, className }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
