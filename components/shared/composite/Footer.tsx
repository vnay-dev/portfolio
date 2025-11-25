export function Footer() {
  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Medium", href: "https://medium.com" },
    { label: "Substack", href: "https://substack.com" },
    { label: "Behance", href: "https://behance.net" },
  ];

  const version = "6.0.0";

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          {/* Social Media Links */}
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright and Version */}
          <div className="flex flex-col items-center gap-2 text-xs text-gray-500 sm:flex-row sm:gap-4">
            <p>© 2025. All rights & wrongs reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p>Version {version}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
