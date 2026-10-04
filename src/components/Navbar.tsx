import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navLinks, restaurant } from "../data/restaurant";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => {
    setOpen(false);
    burgerRef.current?.focus();
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="container nav-bar">
        <a className="nav-logo" href="#home" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Govinda Dosa" width={982} height={168} />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-end">
          <a className="btn btn-yellow nav-call" href={restaurant.phoneTel}>
            <span className="call-long">Call Now</span>
            <span className="call-short">Call</span>
          </a>
          <button
            ref={burgerRef}
            className={`burger${open ? " is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open
        ? createPortal(
            <div id={panelId} className="mobile-panel open">
              <nav aria-label="Mobile">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    ref={index === 0 ? firstLinkRef : undefined}
                    className="mobile-link"
                    href={link.href}
                    aria-current={active === link.id ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
