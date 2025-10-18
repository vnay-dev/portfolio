export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Design Systems",
      excerpt: "Exploring how design systems are evolving in the modern web development landscape.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Design"
    },
    {
      id: 2,
      title: "Building Interactive Prototypes",
      excerpt: "A deep dive into creating realistic prototypes that bring designs to life.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Prototyping"
    },
    {
      id: 3,
      title: "Color Theory in Digital Design",
      excerpt: "Understanding the psychology and application of colors in user interfaces.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Design"
    },
    {
      id: 4,
      title: "Micro-interactions That Matter",
      excerpt: "Small details that make a big difference in user experience design.",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      category: "UX"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gabarito font-bold text-white text-center mb-8 sm:mb-12 md:mb-16">
          Latest Thoughts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50 h-full">
                {/* Blog Thumbnail Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-gabarito font-bold text-white mb-2">
                      {post.title}
                    </h3>
                    <span className="px-2 sm:px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4 mb-3 text-xs sm:text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-gabarito font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {post.excerpt}
                  </p>

                  <button className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base">
                    Read More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-gabarito font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
