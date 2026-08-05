import "./styles.css";

let hydration: Promise<unknown> | undefined;

const hydrate = () => {
  hydration ??= import("./hydrate-app");
  return hydration;
};

// The Firebase build is fully prerendered, so the page and native links work
// before React starts. Load the larger hydration runtime on user intent, with
// a delayed fallback for visitors who begin by reading or scrolling.
for (const eventName of ["pointerdown", "keydown", "touchstart"] as const) {
  window.addEventListener(eventName, hydrate, { once: true, passive: true, capture: true });
}

window.addEventListener(
  "load",
  () => {
    window.setTimeout(hydrate, 8000);
  },
  { once: true },
);
