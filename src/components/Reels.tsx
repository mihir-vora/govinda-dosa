import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { reels, type Reel } from "../data/reels";
import { useDialog } from "../hooks/useDialog";
import { IconClose, IconPlay } from "./Icons";

function youtubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.split("/").filter(Boolean)[0] ?? null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) return parsed.pathname.split("/")[2] ?? null;
      if (parsed.pathname.startsWith("/shorts/")) return parsed.pathname.split("/")[2] ?? null;
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

function reelKind(reel: Reel) {
  const url = reel.url?.trim() ?? "";
  if (!url) return "empty" as const;
  if (reel.source === "youtube" || url.includes("youtu")) return "youtube" as const;
  if (reel.source === "instagram" || url.includes("instagram.com")) return "instagram" as const;
  if (reel.source === "file" || /\.(mp4|webm)(\?|$)/i.test(url)) return "file" as const;
  return "link" as const;
}

export function Reels() {
  const [active, setActive] = useState<Reel | null>(null);
  const close = useCallback(() => setActive(null), []);
  useDialog(Boolean(active), close);

  if (reels.length === 0) return null;

  const kind = active ? reelKind(active) : "empty";
  const videoId = active?.url && kind === "youtube" ? youtubeId(active.url) : null;

  return (
    <section className="section reels" id="reels" aria-labelledby="reels-title">
      <div className="container">
        <div className="section-head light">
          <p className="kicker">Taste it before you visit</p>
          <h2 id="reels-title" className="section-title">
            Watch the food.
          </h2>
          <div className="rule" />
          <p className="lede">
            Short films of dosa on the tawa, so you can see the crisp before you
            walk in.
          </p>
          <p className="note">Video links can be added to these reels when they are ready.</p>
        </div>

        <div className="reel-scroller">
          {reels.map((reel) => (
            <article key={reel.id} className="reel-card">
              <button
                type="button"
                className="reel-hit"
                aria-label={`Play ${reel.title}`}
                onClick={() => setActive(reel)}
              >
                <span className="reel-thumb">
                  <img
                    src={reel.thumbnail}
                    alt=""
                    width={900}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="play" aria-hidden="true">
                    <IconPlay />
                  </span>
                </span>
                <span className="reel-meta">
                  <span className="card-cat">{reel.category}</span>
                  <span className="reel-title">{reel.title}</span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {active
        ? createPortal(
            <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={close}>
              <div className="reel-dialog" onClick={(event) => event.stopPropagation()}>
                <button type="button" className="lightbox-close" onClick={close} aria-label="Close video">
                  <IconClose />
                </button>
                <p className="card-cat">{active.category}</p>
                <h3>{active.title}</h3>
                {kind === "youtube" && videoId ? (
                  <div className="reel-frame">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={active.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : null}
                {kind === "file" && active.url ? (
                  <video src={active.url} controls playsInline preload="metadata" poster={active.thumbnail} />
                ) : null}
                {kind === "instagram" && active.url ? (
                  <p>
                    <a className="btn btn-yellow" href={active.url} target="_blank" rel="noopener noreferrer">
                      Watch on Instagram
                    </a>
                  </p>
                ) : null}
                {kind === "link" && active.url ? (
                  <p>
                    <a className="btn btn-yellow" href={active.url} target="_blank" rel="noopener noreferrer">
                      Watch video
                    </a>
                  </p>
                ) : null}
                {kind === "empty" || (kind === "youtube" && !videoId) ? (
                  <p className="reel-empty">A video for this reel has not been added yet.</p>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
