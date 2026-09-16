import { useEffect, useId, useRef, useState } from "react";
import { nav, site } from "../copy";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__bar">
        <a className="wordmark" href="#top" onClick={close}>
          <span className="wordmark__mark" aria-hidden="true" />
          <span>
            {site.name}
            <small>Consulting</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--small" href="#connect">
            Start a conversation
          </a>
        </nav>

        <button
          ref={closeRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={`menu-toggle__bars${open ? " is-open" : ""}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className={`mobile-nav${open ? " is-open" : ""}`} id={panelId} hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="btn" href="#connect" onClick={close}>
            Start a conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
