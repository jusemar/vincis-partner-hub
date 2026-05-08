import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  value, prefix = "", suffix = "", decimals = 0, duration = 1200,
}: { value: number; prefix?: string; suffix?: string; decimals?: number; duration?: number }) {
  const [n, setN] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value, duration]);

  const formatted = n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  });
  return <span>{prefix}{formatted}{suffix}</span>;
}
