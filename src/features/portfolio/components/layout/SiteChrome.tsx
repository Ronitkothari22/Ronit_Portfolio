type SiteChromeProps = {
  active: string;
  scrolled: boolean;
  navItems: string[];
};

export function SiteChrome({ active, scrolled, navItems }: SiteChromeProps) {
  const labels: Record<string, string> = {
    work: "Work",
    services: "Services",
    experience: "Experience",
    blog: "Blog",
    process: "Process",
    stack: "Tech Stack",
    contact: "Contact"
  };

  return (
    <>
      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">RONIT / AI STUDIO</div>
        <nav>
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>
              {labels[item] ?? item}
            </a>
          ))}
        </nav>
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
