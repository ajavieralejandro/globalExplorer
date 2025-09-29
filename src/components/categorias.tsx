
export type CategoryItem = {
  title: string;
  imageSrc: string;
  alt?: string;
  href?: string;
};

export type ImageCategoryCarouselProps = {
  title?: string;
  cardWidth?: number;       // px
  cardHeight?: number;      // px
  speedSeconds?: number;    // duración de cada loop (seg)
  pauseOnHover?: boolean;
  autoplay?: boolean;
  categoriesRow1?: CategoryItem[];
  categoriesRow2?: CategoryItem[];
};

const DEFAULT_ROW1: CategoryItem[] = [
  { title: "Exóticos", imageSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", alt: "Paisaje exótico" },
  { title: "Deportivos", imageSrc: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop", alt: "Estadio" },
  { title: "Playas", imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop", alt: "Playa turquesa" },
  { title: "Nieve & Ski", imageSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", alt: "Montaña nevada" },
  { title: "Escapadas Urbanas", imageSrc: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop", alt: "Ciudad de noche" },
  { title: "Cruceros", imageSrc: "https://images.unsplash.com/photo-1544551763-7ef42064b2a7?q=80&w=1200&auto=format&fit=crop", alt: "Crucero" },
];

const DEFAULT_ROW2: CategoryItem[] = [
  { title: "Culturales", imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", alt: "Templo europeo" },
  { title: "Gastronomía", imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", alt: "Mesa gourmet" },
  { title: "Bienestar & Spa", imageSrc: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop", alt: "Spa" },
  { title: "Luna de Miel", imageSrc: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop", alt: "Isla paradisíaca" },
  { title: "Naturaleza", imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", alt: "Bosque" },
  { title: "Ruta del Vino", imageSrc: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1200&auto=format&fit=crop", alt: "Viñedo" },
];

function Track({
  items,
  reverse = false,
  cardWidth,
  cardHeight,
  speedSeconds,
  pauseOnHover,
  autoplay,
}: {
  items: CategoryItem[];
  reverse?: boolean;
  cardWidth: number;
  cardHeight: number;
  speedSeconds: number;
  pauseOnHover: boolean;
  autoplay: boolean;
}) {
  const loopItems = [...items, ...items];

  return (
    <div
      className={`ge-marquee relative overflow-hidden select-none ${
        pauseOnHover ? "hover:[animation-play-state:paused]" : ""
      }`}
      style={
        {
          ["--ge-duration" as any]: `${speedSeconds}s`,
          ["--ge-direction" as any]: reverse ? "reverse" : "normal",
          ["animationPlayState" as any]: autoplay ? "running" : "paused",
          height: `${cardHeight + 40}px`, // espacio para título
        } as React.CSSProperties
      }
      aria-label="Carrusel de categorías"
      role="region"
    >
      <div className="ge-track flex items-center">
        {loopItems.map((item, idx) => (
          <Card
            key={`${item.title}-${idx}`}
            item={item}
            width={cardWidth}
            height={cardHeight}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  item,
  width,
  height,
}: {
  item: CategoryItem;
  width: number;
  height: number;
}) {
  const content = (
    <figure
      className="mx-2 w-[var(--w)] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ ["--w" as any]: `${width}px` }}
    >
      <div className="relative" style={{ height }}>
        <img
          src={item.imageSrc}
          alt={item.alt ?? item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.05]"
        />
        {/* Gradiente sutil para legibilidad si quisieras superponer el título:
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        */}
      </div>
      <figcaption className="p-3 text-center">
        <span className="block text-sm font-medium text-gray-900">
          {item.title}
        </span>
      </figcaption>
    </figure>
  );

  return item.href ? (
    <a href={item.href} aria-label={`Ver categoría ${item.title}`}>
      {content}
    </a>
  ) : (
    content
  );
}

const ImageCategoryCarousel: React.FC<ImageCategoryCarouselProps> = ({
  title = "Descubrí categorías de paquetes",
  cardWidth = 260,
  cardHeight = 150,
  speedSeconds = 30,
  pauseOnHover = true,
  autoplay = true,
  categoriesRow1 = DEFAULT_ROW1,
  categoriesRow2 = DEFAULT_ROW2,
}) => {
  return (
    <section className="w-full bg-white">
      <style>{`
        @keyframes ge-marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ge-marquee { position: relative; }
        .ge-marquee .ge-track {
          width: max-content;
          display: flex;
          gap: 0;
          animation-name: ge-marquee-x;
          animation-duration: var(--ge-duration, 40s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: var(--ge-direction, normal);
          will-change: transform;
        }
        .ge-marquee:hover .ge-track { animation-play-state: inherit; }
      `}</style>

      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <header className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-1 text-gray-600">
            Deslizá para explorar líneas de producto mayoristas.
          </p>
        </header>

        {/* Riel 1 */}
        <Track
          items={categoriesRow1}
          reverse={false}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          speedSeconds={speedSeconds}
          pauseOnHover={pauseOnHover}
          autoplay={autoplay}
        />

        <div className="h-6" />

        {/* Riel 2 (opuesto) */}
        <Track
          items={categoriesRow2}
          reverse
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          speedSeconds={speedSeconds}
          pauseOnHover={pauseOnHover}
          autoplay={autoplay}
        />
      </div>
    </section>
  );
};

export default ImageCategoryCarousel;
