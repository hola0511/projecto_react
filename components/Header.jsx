import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
          Mini App React
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/funcionalidad"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            Funcionalidad
          </Link>
        </nav>
      </div>
    </header>
  );
}