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
        <div className="flex flex-col items-center gap-4">
          {/* Social Media Links */}
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
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

          {/* Copyright and Version */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="body-medium text-gray-500">Built with Cursor</p>
            <span className="hidden sm:inline">•</span>
            <p className="body-medium text-gray-500">Version {version}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
