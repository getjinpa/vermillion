export function getBase(): string { return import.meta.env.BASE_URL; }
export function withBase(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('//') || path.startsWith('#')) return path;
  const base = getBase();
  if (base === '/') return path;
  if (path.startsWith(base)) return path;
  if (path.startsWith('/')) return base + path.slice(1);
  return base + path;
}
export function stripBase(pathname: string): string {
  const base = getBase();
  if (base === '/') return pathname;
  if (pathname.startsWith(base)) return '/' + pathname.slice(base.length);
  return pathname;
}
