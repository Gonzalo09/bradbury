import { useProgressiveNumber } from "@/hook/useProgressiveNumber";
import { useEffect } from "react";
import { CountUpProps } from "./interface";

export default function CountUp({
  initial,
  final,
  duration,
  decimals,
  isMoney,
}: CountUpProps) {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals);

  const formatNumber = (value: string) => {
    if (isMoney) {
      return `$${Number(value).toLocaleString()}`;
    }
    return value;
  };

  useEffect(() => {
    setCount(String(final));
  }, [final]);

  return <span>{formatNumber(count)}</span>;
}
