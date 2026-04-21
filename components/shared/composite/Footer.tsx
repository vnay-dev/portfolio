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
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6 md:px-24">
        <div className="flex w-full min-w-0 flex-row items-center justify-between gap-4">
          <ul className="flex min-w-0 flex-1 flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 text-gray-500 sm:gap-4">
            <p className="body-medium">Built with Cursor</p>
            <span className="text-gray-400" aria-hidden>
              •
            </span>
            <p className="body-medium">Version {version}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
