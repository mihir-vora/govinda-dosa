import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { galleryImages } from "../data/gallery";
import { useDialog } from "../hooks/useDialog";
import { IconChevron, IconClose } from "./Icons";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const current = open ? galleryImages[index] : null;
  const samples = galleryImages.some((image) => image.placeholder);

  const close = useCallback(() => setIndex(null), []);
  useDialog(open, close);

  const step = useCallback(
    (direction: number) => {
      setIndex((value) => {
        if (value === null || galleryImages.length === 0) return value;
        return (value + direction + galleryImages.length) % galleryImages.length;
      });
    },
    [],
  );

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step]);

  const touchX = useRef(0);

  if (galleryImages.length === 0) return null;

  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Food gallery</p>
          <h2 id="gallery-title" className="section-title">
            See the food first.
          </h2>
          <div className="rule" />
          <p className="lede">
            Crisp dosas, chutney, filter coffee, and the plates that make a South
            Indian table feel complete.
          </p>
          {samples ? (
            <p className="note">
              These photographs are stand-ins. Govinda Dosa&apos;s own pictures can
              replace them at any time.
            </p>
          ) : null}
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, imageIndex) => (
            <button
              key={image.id}
              type="button"
              className="tile"
              onClick={() => setIndex(imageIndex)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
              />
              <span className="tile-caption">{image.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {current && index !== null
        ? createPortal(
            <div
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={current.caption}
              onClick={close}
            >
              <div
                className="lightbox-dialog"
                onClick={(event) => event.stopPropagation()}
                onTouchStart={(event) => {
                  touchX.current = event.changedTouches[0]?.clientX ?? 0;
                }}
                onTouchEnd={(event) => {
                  const end = event.changedTouches[0]?.clientX ?? 0;
                  const delta = end - touchX.current;
                  if (delta > 48) step(-1);
                  if (delta < -48) step(1);
                }}
              >
                <button
                  ref={closeRef}
                  type="button"
                  className="lightbox-close"
                  onClick={close}
                  aria-label="Close gallery"
                >
                  <IconClose />
                </button>
                <button
                  type="button"
                  className="lightbox-nav prev"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                >
                  <IconChevron />
                </button>
                <figure className="lightbox-figure">
                  <img src={current.src} alt={current.alt} />
                  <figcaption>
                    {current.caption}
                    <span>
                      {index + 1} / {galleryImages.length}
                    </span>
                  </figcaption>
                </figure>
                <button
                  type="button"
                  className="lightbox-nav next"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                >
                  <IconChevron />
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
