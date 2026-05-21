type SiteChromeProps = {
  active: string;
  scrolled: boolean;
  navItems: string[];
};

export function SiteChrome({ active, scrolled, navItems }: SiteChromeProps) {
  const navPill = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "services", label: "More" },
    { id: "experience", label: "Experience" },
    { id: "blog", label: "Blog" }
  ];

  return (
    <>
      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">RK</div>
        <nav className="nav-pill">
          {navPill.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="book-call">Book a Call</a>
        </nav>
        <button className="nav-icon" aria-label="Quick Action">⌘</button>
      </header>

      <aside className="section-index">
        {navItems.map((item, i) => (
          <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>
            {(i + 1).toString().padStart(2, "0")}
          </a>
        ))}
      </aside>
    </>
  );
}
