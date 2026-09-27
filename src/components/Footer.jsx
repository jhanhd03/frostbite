function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-12 py-8 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div>
          <p className="font-bold text-sm text-white">FrostBite - Distribución B2B de Hielo</p>
          <p className="text-gray-400 mt-1">Abastecimiento confiable para locales comerciales y gastronomía</p>
        </div>
        <div className="text-center sm:text-right">
          <p>Despacho programado y entregas refrigeradas.</p>
          <p className="text-gray-500 mt-1">&copy; 2026 FrostBite SpA</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;