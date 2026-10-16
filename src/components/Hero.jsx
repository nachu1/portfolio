export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-5 px-5 py-8 sm:gap-12 sm:px-6 sm:py-20 md:min-h-[80vh] md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] md:py-24 lg:py-28"
    >
      {/* Introduction */}
      <div className="w-full min-w-0">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-600 sm:mb-6 sm:px-4 sm:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
          Open to opportunities
        </div>

        {/* Mobile: name and photo together */}
        <div className="flex min-w-0 items-center gap-4 md:block">
          <div className="min-w-0 flex-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 sm:text-sm sm:tracking-[0.2em]">
              Hello, I'm
            </p>

            <h1 className="break-words text-3xl font-bold leading-tight tracking-tight text-gray-950 min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
              Abdul Naser 
            </h1>

            <h2 className="mt-3 text-base font-semibold leading-relaxed text-gray-700 sm:mt-5 sm:text-2xl md:text-xl lg:text-2xl">
              Generative AI Engineer
              <span className="text-violet-600"> &amp; </span>
              Full-Stack Developer
            </h2>
          </div>

          {/* Compact photo on mobile only */}
          <div className="w-24 shrink-0 sm:w-28 md:hidden">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
              <img
                src="/images/profile.png"
                alt="Abdul Naser CA"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          I build intelligent applications by combining AI, agentic workflows, and modern web technologies.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#projects"
            className="inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full bg-violet-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-violet-700 sm:w-auto sm:px-6 sm:text-base"
          >
            Explore My Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full border border-gray-300 px-4 py-3 text-center text-sm font-medium text-gray-800 transition hover:border-gray-900 sm:w-auto sm:px-6 sm:text-base"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-600 sm:mt-9">
          <a
            href="https://github.com/nachu1"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-violet-600"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-naser-ca-3b4876359/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-violet-600"
          >
            LinkedIn
          </a>

          <a
            href="mailto:nasarc530@gmail.com"
            className="transition-colors hover:text-violet-600"
          >
            Email
          </a>
        </div>
      </div>

      {/* Original larger profile photo on desktop only */}
      <div className="hidden min-w-0 justify-center md:flex md:justify-end">
        <div className="h-64 w-64 overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 shadow-sm lg:h-80 lg:w-80">
          <img
            src="/images/profile.png"
            alt="Abdul Naser CA"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}