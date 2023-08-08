export function debounce<Fn extends Function>(fn: Fn, ms: number): Fn {
  let timeoutId: number | null = null;
  const debounced = (...args: any[]) => {
    timeoutId && window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), ms);
  };

  return (debounced as any) as Fn;
}
