import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mini App React",
  description: "Evento Evaluativo 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 antialiased">
        
        {/* Glow suave detrás del contenido */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-[120px] -z-10"></div>
        <div className="fixed inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-slate-100"></div>

        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <Header />

          {/* MAIN */}
          <main className="flex-1 px-6 md:px-12 py-10">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      </body>
    </html>
  );
}