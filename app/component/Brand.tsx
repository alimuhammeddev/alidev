import Link from "next/link";

type BrandProps = {
  inverted?: boolean;
};

export default function Brand({ inverted = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Ali Muhammed — home"
      className="group inline-flex items-center gap-3"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 44 44"
        className={`h-10 w-10 shrink-0 transition-colors ${
          inverted
            ? "text-[#d58b69] group-hover:text-[#f0bd9f]"
            : "text-[#a95132] group-hover:text-[#252720]"
        }`}
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text
          x="7"
          y="30"
          fill="currentColor"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="22"
          letterSpacing="-4"
        >
          AM
        </text>
        <path d="M31 9v26" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      <span className="flex flex-col gap-1">
        <span
          className={`text-[13px] font-semibold uppercase leading-none tracking-[0.16em] ${
            inverted ? "text-[#f5f2eb]" : "text-[#252720]"
          }`}
        >
          Ali Muhammed
        </span>
        <span
          className={`text-[9px] uppercase leading-none tracking-[0.22em] ${
            inverted ? "text-[#b9b8ac]" : "text-[#716f66]"
          }`}
        >
          Frontend developer
        </span>
      </span>
    </Link>
  );
}
