type ClassValue = string | number | null | undefined | false | ClassValue[];

function flatten(input: ClassValue, out: string[]) {
  if (!input && input !== 0) return;
  if (Array.isArray(input)) {
    input.forEach((item) => flatten(item, out));
    return;
  }
  out.push(String(input));
}

/** Lightweight classnames combiner (avoids adding an extra dependency). */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  inputs.forEach((input) => flatten(input, out));
  return out.join(" ");
}
