export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // High-Visibility iOS 26 Palette
        primary: "#8B5CF6", // Vibrant Purple
        primaryDark: "#7C3AED", // Deep Violet

        // Exact Text Mappings from Request
        textPrimary: "#2B1E3F", // Deep Indigo
        textSecondary: "#6B6485", // Muted Violet-Grey
        textPlaceholder: "#8E86A8", // Lavender Slate
        textDisabled: "#9A93B8", // Cool Grey-Lavender

        // Active/Status Colors
        accent: "#6D5CF6", // iOS Violet Accent
        success: "#22C55E", // RUNNING
        error: "#F87171", // STOPPED

        // Backgrounds
        secondary: "#EDE9FE",
        lavenderMist: "#F3E8FF",
        deepPurple: "#1E1B2E",
      },
      borderRadius: {
        'xl': '1.25rem', // 20px
        '2xl': '1.75rem', // 28px
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
