export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-600">
        <p className="font-semibold text-slate-800">
          Mini App React — Evento Evaluativo 3
        </p>
        <p className="mt-1 text-slate-500">
          Desarrollado con Next.js y TailwindCSS
        </p>
        <div className="mt-3 flex justify-center gap-4 text-blue-600">
          <a
            href="https://github.com/alejop0927"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}