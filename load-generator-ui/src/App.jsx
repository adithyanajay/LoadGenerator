import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import ThemeToggle from "./components/ThemeToggle";
import Logo from "./components/ui/Logo";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
  }, []);

  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm border-b-0 rounded-none px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo />
          </div>
        </div>
      </header>

      <main className="pt-28 pb-10 px-6">
        <Dashboard />
      </main>
    </div>
  );
}
