import { Link } from "@/i18n/navigation";

type LogoProps = { size?: number };

/** Monograma "LS" + nome. O monograma é decorativo (aria-hidden). */
export default function Logo({ size = 38 }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-ink sm:text-[22px]"
    >
      <span
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center rounded-xl bg-accent font-display font-extrabold tracking-[-0.04em] text-white"
        style={{ width: size, height: size, fontSize: Math.round(size * 0.45) }}
      >
        LS
      </span>
      Lauana Segal
    </Link>
  );
}
