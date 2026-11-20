import { Bell, CircleHelp, ShieldCheck } from 'lucide-react';

function Topbar() {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-1.5  text-xs text-zinc-600">
      <div className="flex items-center gap-1.5 font-medium text-zinc-700">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Dijamin Hemat & 100% Produk Asli</span>
      </div>

      <div className="flex items-center gap-4">
        <a href="/notifications" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
          <Bell className="w-3.5 h-3.5" />
          <span>Notifikasi</span>
        </a>

        <span className="text-zinc-300">|</span>

        <a href="/help" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
          <CircleHelp className="w-3.5 h-3.5" />
          <span>Bantuan</span>
        </a>
      </div>
    </div>
  );
}

export default Topbar;
