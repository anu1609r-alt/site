import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GraduationCap, Heart, Scale, Search, ShieldCheck, LogIn, Menu, X } from 'lucide-react';
import { User, FavoritesState } from '../types';

interface NavbarProps {
  user: User | null;
  favorites: FavoritesState;
  compareCount: number;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, favorites, compareCount, onOpenSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalFavs = favorites.universities.length + favorites.specialties.length;

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">UniGuide</span>
              <span className="text-xs ml-1 font-extrabold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-200">KZ</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink to="/" className={navClass}>Главная</NavLink>
            <NavLink to="/universities" className={navClass}>Университеты</NavLink>
            <NavLink to="/specialties" className={navClass}>Специальности</NavLink>
            <NavLink to="/compare" className={navClass}>
              <span className="flex items-center gap-1.5">
                Сравнение
                {compareCount > 0 && (
                  <span className="bg-brand-600 text-white text-[11px] px-1.5 py-0.2 rounded-full font-bold">
                    {compareCount}
                  </span>
                )}
              </span>
            </NavLink>
            <NavLink to="/calculator" className={navClass}>Калькулятор</NavLink>
            <NavLink to="/quiz" className={navClass}>Тест</NavLink>
          </nav>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
              title="Поиск по сайту"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/favorites"
              className="relative p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
              title="Избранное"
            >
              <Heart className="w-5 h-5" />
              {totalFavs > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-2">
                <Link to="/profile" className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-slate-100 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-brand-600 text-white text-xs font-bold flex items-center justify-center uppercase">
                    {user.name.slice(0, 2)}
                  </div>
                  <span className="text-xs font-semibold max-w-[100px] truncate">{user.name}</span>
                </Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg" title="Админ-панель">
                    <ShieldCheck className="w-5 h-5" />
                  </Link>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition shadow-sm shadow-brand-500/25"
              >
                <LogIn className="w-4 h-4" />
                Войти
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={onOpenSearch} className="p-2 text-slate-600">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">Главная</Link>
          <Link to="/universities" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">Университеты</Link>
          <Link to="/specialties" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">Специальности</Link>
          <Link to="/compare" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">
            Сравнение ({compareCount})
          </Link>
          <Link to="/calculator" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">Калькулятор</Link>
          <Link to="/quiz" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">Тест</Link>
          <Link to="/favorites" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50">Избранное ({totalFavs})</Link>
          {user ? (
            <Link to="/profile" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-semibold text-brand-600 bg-brand-50">
              Личный кабинет ({user.name})
            </Link>
          ) : (
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block text-center mt-3 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold">
              Войти
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
