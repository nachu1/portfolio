
const screenshots = [
  {
    title: "Live Classroom Monitoring Dashboard",
    image: "/images/attention-monitoring/dashboard.png",
    description:
      "Displays a live classroom feed with AI-based student detection and tracking, individual attention scores, detected activities, and real-time alerts.",
  },
  {
    title: "Real-Time Nudge Alert",
    image: "/images/attention-monitoring/alert.png",
    description:
      "Displays a warning on the student portal when a teacher sends a nudge to a student identified as inattentive, encouraging them to refocus on the class.",
  },
];

export default function AttentionMonitoring() {
  return (
    <section
      id="attention-monitoring"
      className="w-full scroll-mt-20 bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600 sm:text-sm">
           
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Real-Time Attention Monitoring System
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
            A computer vision-based classroom monitoring system that detects
            and tracks student activities, evaluates attention based on teacher
            instructions, and provides real-time insights and alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {screenshots.map((item) => (
            <article
              key={item.title}
              className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex min-h-52 items-center justify-center bg-gray-100 p-3 sm:p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="block h-auto max-h-[420px] w-full rounded-lg object-contain"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <h3 className="text-base font-semibold text-gray-900">
            Technologies Used
          </h3>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            Python, OpenCV, YOLOv8, DeepSORT, PyTorch, and Ultralytics.
          </p>
        </div>
      </div>
    </section>
  );
}
