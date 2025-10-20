export function FooterSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.1-.624-.55-3.685-1.988-7.314-2.868.5-5.765 1.075-6.496 1.194-.35 3.41.26 6.477 2.02 8.74 1.74-1.04 4.02-1.62 6.464-1.62zm-11.62-2.58c.435-.243 2.345-1.24 5.36-1.7-1.25-3.52-2.424-6.52-2.87-7.04-3.41 1.48-5.8 4.35-6.38 7.78.03.01.05.02.08.02.6.04 1.9.16 3.81.94zm-2.17-9.33c.45.52 1.63 3.52 2.87 7.04 3.01-.46 4.92-1.46 5.36-1.7.6-3.43 2.97-6.3 6.38-7.78-.45.52-1.62 3.52-2.87 7.04-3.01.46-4.92 1.46-5.36 1.7-.6 3.43-2.97 6.3-6.38 7.78z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gabarito font-bold text-white mb-6 sm:mb-8">
          If you've scrolled till here, why don't you give me a call?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Let's create something amazing together. I'm always excited to work on new projects and collaborate with fellow creatives.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-200 text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Resume Download */}
        <div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-gabarito font-bold rounded-full hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/30">
          <p className="text-gray-400 text-sm">
            © 2025 Vinay Krishnan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
