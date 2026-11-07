import Image from "next/image";

type ProjectImageProps = {
  /** Caminho em /public. Se ausente, mostra o espaço reservado listrado. */
  src?: string;
  alt: string;
  /** Texto do espaço reservado (e do aria-label dele). */
  label: string;
  /** Classes de proporção, ex.: "aspect-[4/3]". */
  aspect?: string;
  /** Classes de arredondamento, ex.: "rounded-3xl". */
  radius?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ProjectImage({
  src,
  alt,
  label,
  aspect = "aspect-[4/3]",
  radius = "rounded-3xl",
  sizes = "(min-width: 1024px) 380px, 100vw",
  priority = false,
}: ProjectImageProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${radius}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-stripes flex items-center justify-center px-4 text-center text-[15px] font-medium text-muted ${aspect} ${radius}`}
    >
      [ {label} ]
    </div>
  );
}
