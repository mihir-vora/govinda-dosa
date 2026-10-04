import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { restaurant } from "../data/restaurant";
import { reviewSummary, reviews, type ReviewPhoto } from "../data/reviews";
import { useDialog } from "../hooks/useDialog";
import { IconChevron, IconClose } from "./Icons";

type OpenPhoto = {
  reviewId: string;
  index: number;
};

function Stars({ value }: { value: number }) {
  return (
    <p className="review-stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true" className={index < value ? "is-on" : ""}>
          ★
        </span>
      ))}
    </p>
  );
}

export function Reviews() {
  const [openPhoto, setOpenPhoto] = useState<OpenPhoto | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef(0);
  const active = reviews.find((review) => review.id === openPhoto?.reviewId);
  const photos: ReviewPhoto[] = active?.photos ?? [];
  const photoIndex = openPhoto?.index ?? 0;
  const current = photos[photoIndex];
  const open = Boolean(current);

  const close = useCallback(() => setOpenPhoto(null), []);
  useDialog(open, close);

  const step = useCallback((direction: number) => {
    setOpenPhoto((value) => {
      if (!value) return value;
      const review = reviews.find((item) => item.id === value.reviewId);
      const total = review?.photos.length ?? 0;
      if (total < 2) return value;
      return {
        ...value,
        index: (value.index + direction + total) % total,
      };
    });
  }, []);

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

  return (
    <section className="section reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Guest words</p>
          <h2 id="reviews-title" className="section-title">
            What people say after they eat.
          </h2>
          <div className="rule" />
          <p className="lede">
            Google lists Govinda Dosa at {reviewSummary.rating} from {reviewSummary.count}{" "}
            reviews. These {reviews.length} include photos, shown as guests wrote them.
          </p>
          <p className="note">
            <a href={restaurant.reviewsUrl} target="_blank" rel="noopener noreferrer">
              See every Google review
            </a>
          </p>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article key={review.id} className="review-card reveal">
              <div
                className={`review-photos cols-${review.photos.length}`}
              >
                {review.photos.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className="review-photo"
                    aria-label={image.alt}
                    onClick={() => setOpenPhoto({ reviewId: review.id, index })}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
              <Stars value={review.stars} />
              {review.quote ? <p className="review-quote">{review.quote}</p> : null}
              <p className="review-author">{review.author}</p>
              <p className="review-source">
                Google · {review.when}
              </p>
            </article>
          ))}
        </div>
      </div>

      {current && openPhoto
        ? createPortal(
            <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={close}>
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
                  aria-label="Close photo"
                >
                  <IconClose />
                </button>
                {photos.length > 1 ? (
                  <button
                    type="button"
                    className="lightbox-nav prev"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                  >
                    <IconChevron />
                  </button>
                ) : (
                  <span />
                )}
                <figure className="lightbox-figure">
                  <img src={current.src} alt={current.alt} />
                  <figcaption>
                    {active?.author}
                    <span>
                      {photoIndex + 1} / {photos.length}
                    </span>
                  </figcaption>
                </figure>
                {photos.length > 1 ? (
                  <button
                    type="button"
                    className="lightbox-nav next"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                  >
                    <IconChevron />
                  </button>
                ) : (
                  <span />
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
