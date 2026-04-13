import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens → Gruvbox Dark
        primary: '#fabd2f',    // yellow accent
        dark: '#ebdbb2',       // fg  (body text)
        'light-bg': '#3c3836', // bg1 (card bg)
        white: '#282828',      // bg  (section bg)
        muted: '#d5c4a1',      // fg2 (muted / secondary text — contrast-safe)
        accent: '#8ec07c',     // aqua
        navy: '#1d2021',       // bg0_h (deepest bg)
        border: '#504945',     // bg2 (borders / dividers)
        // Full Gruvbox palette
        'grv-bg-h': '#1d2021',
        'grv-bg': '#282828',
        'grv-bg-s': '#32302f',
        'grv-bg1': '#3c3836',
        'grv-bg2': '#504945',
        'grv-bg3': '#665c54',
        'grv-bg4': '#7c6f64',
        'grv-fg': '#ebdbb2',
        'grv-fg0': '#fbf1c7',
        'grv-fg2': '#d5c4a1',
        'grv-fg4': '#a89984',
        'grv-gray': '#928374',
        'grv-red': '#fb4934',
        'grv-green': '#b8bb26',
        'grv-yellow': '#fabd2f',
        'grv-blue': '#83a598',
        'grv-purple': '#d3869b',
        'grv-aqua': '#8ec07c',
        'grv-orange': '#fe8019',
      },
      screens: {
        menu: '1204px',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
