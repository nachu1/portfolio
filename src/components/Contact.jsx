

const contacts = [
  {
    label: "Email",
    value: "nasarc530@gmail.com",
    href: "mailto:nasarc530@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 6235460317",
    href: "tel:+916235460317",
  },
  {
    label: "LinkedIn",
    value: "View LinkedIn profile",
    href: "https://linkedin.com/in/abdul-naser-ca-3b4876359",
  },
  {
    label: "GitHub",
    value: "github.com/nachu1",
    href: "https://github.com/nachu1",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
          Get In Touch
        </p>

       

        

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.label === "LinkedIn" || contact.label === "GitHub"
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.label === "LinkedIn" || contact.label === "GitHub"
                  ? "noreferrer"
                  : undefined
              }
              className="group rounded-2xl border border-sky-200 bg-sky-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md sm:p-6"
            >
              <p className="text-sm font-medium text-gray-500">
                {contact.label}
              </p>

              <p className="mt-2 break-words font-semibold text-gray-900 transition-colors group-hover:text-violet-700">
                {contact.value}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600">
                Connect
                <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
