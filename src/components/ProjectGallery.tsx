import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCaptions } from '../data/resume';

/**
 * Every image under src/assets/<folder>/ is collected at build time. Drop a file
 * in and it shows up — there is no import to add. Files sort by name, so naming
 * them 01-…, 02-… controls the order they appear in.
 */
const allImages = import.meta.glob<string>(
  '../assets/*/*.{png,jpg,jpeg,webp,gif,avif}',
  { eager: true, import: 'default' },
);

export type GalleryImage = { src: string; caption?: string };

export function loadGallery(folder?: string): GalleryImage[] {
  if (!folder) return [];
  const prefix = `../assets/${folder}/`;

  return Object.keys(allImages)
    .filter((path) => path.startsWith(prefix))
    .sort()
    .map((path) => {
      const filename = path.slice(prefix.length).replace(/\.[^.]+$/, '');
      return { src: allImages[path], caption: galleryCaptions[filename] };
    });
}

export default function ProjectGallery({
  images,
  alt,
}: {
  images: GalleryImage[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  // Callers render their own fallback when empty; bail so indexing can't go negative.
  if (images.length === 0) return null;

  // Clamp rather than trust the index — a hot reload can leave it past the end.
  const safeIndex = Math.min(index, images.length - 1);
  const current = images[safeIndex];
  const go = (delta: number) =>
    setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <figure className="m-0">
      <div className="relative group rounded-xl overflow-hidden bg-slate-900 aspect-[4/5] ring-1 ring-slate-900/5">
        <img
          src={current.src}
          alt={`${alt} — image ${safeIndex + 1} of ${images.length}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <GalleryArrow side="left" onClick={() => go(-1)} />
            <GalleryArrow side="right" onClick={() => go(1)} />

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === safeIndex}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === safeIndex
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {current.caption && (
        <figcaption className="mt-2.5 text-xs text-slate-500 leading-relaxed">
          {current.caption}
        </figcaption>
      )}
    </figure>
  );
}

function GalleryArrow({
  side,
  onClick,
}: {
  side: 'left' | 'right';
  onClick: () => void;
}) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous image' : 'Next image'}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === 'left' ? 'left-2' : 'right-2'
      } p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-black/60 transition-opacity duration-200`}
    >
      <Icon size={18} />
    </button>
  );
}
