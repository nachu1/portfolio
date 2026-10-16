

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "code-2",
    skills: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Web Technologies",
    icon: "layers",
    skills: ["HTML", "CSS"],
  },
  {
    title: "Backend & AI Frameworks",
    icon: "layers",
    skills: ["React.js","FastAPI", "LangChain", "LangGraph"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL", "MongoDB", "ChromaDB"],
  },
  {
    title: "AI, GenAI & Computer Vision",
    icon: "brain-circuit",
    skills: [
      "RAG",
      "Gemini API",
      "LangSmith",
      "RAGAS",
      "YOLOv8",
      "OpenCV",
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Professional Skills",
    icon: "users",
    skills: [
      "Communication",
      "Problem-Solving",
      "Team Collaboration",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
          What I Work With
        </p>

        

        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          Technologies and tools I use to build AI-powered applications
          and full-stack web solutions.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-100 hover:shadow-lg sm:p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                {group.icon === "code-2" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
                  </svg>
                )}

                {group.icon === "layers" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />
                  </svg>
                )}

                {group.icon === "database" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <ellipse cx="12" cy="5" rx="8" ry="3" />
                    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                  </svg>
                )}

                {group.icon === "brain-circuit" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M12 18V5M9 7a3 3 0 1 0-3 3 3 3 0 1 0 1 6 3 3 0 1 0 5 2M15 7a3 3 0 1 1 3 3 3 3 0 1 1-1 6 3 3 0 1 1-5 2M9 12h6" />
                  </svg>
                )}

                {group.icon === "wrench" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z" />
                  </svg>
                )}

                {group.icon === "users" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" />
                  </svg>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-purple-200 bg-purple-100 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-purple-300 hover:bg-purple-200 hover:text-purple-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
