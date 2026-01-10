import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="h-full flex flex-col bg-lightBg dark:bg-darkBg">
      {/* TOP BAR */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-primary">
          DynamiQ
        </h1>

        <ThemeToggle
          theme={theme}
          onToggle={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto py-6">
        <div className="max-w-6xl mx-auto px-6">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;
