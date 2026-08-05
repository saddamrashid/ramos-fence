/**
 * Tailwind's color-opacity modifiers (e.g. `bg-primary/20`) only work when a
 * color is defined as `rgb(var(--x) / <alpha-value>)`, using the raw R G B
 * channel numbers in the CSS variable — not a hex string. This helper
 * converts the friendly hex values authored in `site.config.ts` into that
 * "R G B" channel format at request time, so you can keep writing normal
 * hex colors in the config without worrying about this detail.
 */
export function hexToRgbChannels(hex: string): string {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  const r = parseInt(full.substring(0, 2), 16);
  const g = parseInt(full.substring(2, 4), 16);
  const b = parseInt(full.substring(4, 6), 16);

  return `${r} ${g} ${b}`;
}
