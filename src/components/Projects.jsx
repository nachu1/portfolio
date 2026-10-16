
const projects = [
  {
    title: "BizInsight",
    description:
      "A multi-tenant, multi-agent AI platform that helps organizations analyze business documents and retrieve insights through conversational AI.",
    video: "/videos/bizinsight-demo.mp4",
    tools:
      "React, FastAPI, MongoDB, ChromaDB, LangChain, LangGraph, Gemini API",
  },
  {
    title: "HireReady",
    description:
      " An AI-powered career assistance platform that simplifies job preparation through AI-driven resumeoptimization, personalized career guidance, and automated interview practice.",
    video: "/videos/hireready-demo.mp4",
    tools: "React, FastAPI, MongoDB, Gemini API",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600 sm:text-sm">
            Featured Work
          </p>

          <h2 className="max-w-3xl break-words text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
             Building Intelligent Solutions with AI
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Explore my AI-powered applications through live product demos.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="grid min-w-0 grid-cols-1 md:grid-cols-2">
                {/* Video */}
                <div className="flex min-w-0 items-center justify-center bg-gray-950 p-2 sm:p-4 md:p-3 lg:p-5">
                  <video
                    key={project.video}
                    className="block h-auto max-h-[480px] w-full rounded-lg object-contain"
                    controls
                    playsInline
                    preload="auto"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                </div>

                {/* Project Details */}
                <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 md:p-6 lg:p-9">
                  <h3 className="break-words text-xl font-bold text-gray-900 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 sm:mt-6">
                    <p className="text-sm font-semibold text-gray-900">
                      Technologies
                    </p>

                    <p className="mt-2 break-words text-sm leading-6 text-gray-500">
                      {project.tools}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}