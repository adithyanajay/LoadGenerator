function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="
        px-4 py-2 rounded-full
        bg-primary text-white
        font-semibold
        hover:bg-primaryDark
        transition
      "
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
