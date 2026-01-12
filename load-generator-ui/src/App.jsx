import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">DynamiQ</h1>

          <ThemeToggle
            theme={theme}
            onToggle={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          />
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}
