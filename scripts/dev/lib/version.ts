// Local semantic-version helper used by version consistency tests.
export function bump(current: string, spec: string): string {
  if (/^\d+\.\d+\.\d+$/.test(spec)) return spec;
  const [major, minor, patch] = current.split(".").map(Number);
  if (spec === "major") return `${major + 1}.0.0`;
  if (spec === "minor") return `${major}.${minor + 1}.0`;
  if (spec === "patch") return `${major}.${minor}.${patch + 1}`;
  throw new Error(`版本参数只能是 patch / minor / major / X.Y.Z，收到 ${spec}`);
}
