import ThemeToggle from "../components/ThemeToggle";
import Logo from "../components/ui/Logo";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-darkCard border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="px-6 py-5">
          <Logo />
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <div className="text-sm font-medium text-textSecondary uppercase">
            Load Tools
          </div>
          <button className="w-full text-left px-3 py-2 rounded-md bg-accent text-white font-medium">
            Load Generator
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md font-medium text-textSecondary hover:bg-gray-100 dark:hover:bg-gray-700">
            Load Balancer
          </button>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="h-16 bg-white dark:bg-darkCard border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
          <h1 className="font-semibold">Load Generator</h1>
          <ThemeToggle />
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
