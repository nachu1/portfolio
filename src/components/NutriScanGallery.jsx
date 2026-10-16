

const screenshots = [
  {
    title: "Nutrition Analysis",
    description:
      "Displays a health rating and an AI-generated explanation of the product's ingredients and potential nutritional concerns.",
    image: "/images/nutriscan/nutriscan_health_analysis.png",
  },
  {
    title: "Ingredient Scanning",
    description:
      "Uses the phone camera to capture ingredient lists and nutritional information from food packaging.",
    image: "/images/nutriscan/nutriscan_ingredient_scanning.png",
  },
  {
    title: "Manual Product Entry",
    description:
      "Lets users enter a product name and its ingredients manually when automatic product identification is unavailable.",
    image: "/images/nutriscan/nutriscan_product_details.png",
  },
  {
    title: "Product Identification",
    description:
      "Offers ingredient scanning and manual entry when a product cannot be found.",
    image: "/images/nutriscan/nutriscan_product_not_found.png",
  },
];

export default function NutriScanGallery() {
  return (
    <section
      id="nutriscan"
      className="w-full scroll-mt-20 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 sm:text-sm">
         
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          NutriScan
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
          NutriScan is an AI-powered nutrition analysis app that
          helps users understand packaged food products by
          analyzing their ingredients, assigning health ratings,
          and explaining potential nutritional concerns.
        </p>

        {/* Responsive Screenshot Gallery */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8">
          {screenshots.map((item) => (
            <article
              key={item.title}
              className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Screenshot */}
              <div className="flex h-[420px] items-center justify-center bg-gray-50 p-3 sm:h-[480px] sm:p-4 lg:h-[520px]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="block max-h-full max-w-full rounded-lg object-contain"
                />
              </div>

              {/* Screenshot Details */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
