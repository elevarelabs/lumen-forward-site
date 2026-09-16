import { footer, nav, site } from "../copy";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <p className="wordmark wordmark--footer">
            <span className="wordmark__mark" aria-hidden="true" />
            <span>
              {site.name}
              <small>Consulting</small>
            </span>
          </p>
          <p className="site-footer__blurb">{footer.blurb}</p>
        </div>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#connect">Start a conversation</a>
        </nav>
      </div>
      <div className="wrap site-footer__base">
        <p>
          © {new Date().getFullYear()} {footer.copyright}
        </p>
        <p>lumenforward.com will be the live domain later. This is a preview build.</p>
      </div>
    </footer>
  );
}
