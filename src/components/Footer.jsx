

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-5 text-gray-400 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-gray-800 pt-5 sm:flex-row">
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Abdul Naser CA
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1 text-sm transition-colors hover:text-violet-400"
        >
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

