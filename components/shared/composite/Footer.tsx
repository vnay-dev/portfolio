import { Fragment } from "react";

export function Footer() {
  const socialLinks = [
    // { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vinay-krishnan-9a179a183/" },
    // { label: "Medium", href: "https://medium.com" },
    { label: "Substack", href: "https://substack.com/@vnaykrshn116" },
    // { label: "Behance", href: "https://behance.net" },
    { label: "Github", href: "https://github.com/vnay-dev/" },
  ];

  const version = "6.0.0";

  return (
    <footer className="w-full overflow-hidden border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6 sm:px-6 md:px-12 lg:px-24">
        <div className="flex w-full min-w-0 flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 lg:flex-nowrap lg:justify-between lg:text-left">
          <nav
            aria-label="Social links"
            className="flex min-w-0 flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6"
          >
            {socialLinks.map((social, index) => (
              <Fragment key={social.href}>
                {index > 0 && (
                  <span className="select-none text-gray-400 lg:hidden" aria-hidden>
                    ·
                  </span>
                )}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {social.label}
                </a>
              </Fragment>
            ))}
          </nav>

          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-500">
            <p className="body-medium whitespace-nowrap">Built with Cursor</p>
            <p className="body-medium whitespace-nowrap">Version {version}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
