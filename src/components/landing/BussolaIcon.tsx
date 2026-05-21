import bussola from "@/assets/bussola.png";

export function BussolaIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src={bussola}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`object-contain ${className}`}
    />
  );
}
