import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		spacing: {
  			'tg-safe-top': 'var(--tg-safe-area-inset-top)',
  			'tg-safe-bottom': 'calc(var(--tg-safe-area-inset-bottom) + 1rem)',
  			'tg-safe-left': 'var(--tg-safe-area-inset-left)',
  			'tg-safe-right': 'var(--tg-safe-area-inset-right)',
  			'tg-content-safe-top': 'var(--tg-content-safe-area-inset-top)',
  			'tg-content-safe-bottom': 'var(--tg-content-safe-area-inset-bottom)',
  			'tg-content-safe-left': 'var(--tg-content-safe-area-inset-left)',
  			'tg-content-safe-right': 'var(--tg-content-safe-area-inset-right)',
  			'tg-safe-top-full': 'calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top))',
  			'tg-header-height': 'calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top) + 2rem)',
  			'tg-viewport-height': 'var(--tg-viewport-height)'
			
  		},
  		colors: {
  			tg: {
  				bg: 'var(--tg-theme-bg-color)',
  				text: 'var(--tg-theme-text-color)',
  				hint: 'var(--tg-theme-hint-color)',
  				link: 'var(--tg-theme-link-color)',
  				button: {
  					DEFAULT: 'var(--tg-theme-button-color)',
  					text: 'var(--tg-theme-button-text-color)'
  				},
  				'secondary-bg': 'var(--tg-theme-secondary-bg-color)',
  				'header-bg': 'var(--tg-theme-header-bg-color)',
  				accent: 'var(--tg-theme-accent-text-color)',
  				'section-bg': 'var(--tg-theme-section-bg-color)',
  				'section-header': 'var(--tg-theme-section-header-text-color)',
  				subtitle: 'var(--tg-theme-subtitle-text-color)',
  				destructive: 'var(--tg-theme-destructive-text-color)',
  				separator: 'var(--tg-theme-section-separator-color)',
  				'bottom-bar': 'var(--tg-theme-bottom-bar-bg-color)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			link: 'var(--link)',
  			button: {
  				DEFAULT: 'var(--button-bg)',
  				text: 'var(--button-text)'
  			},
  			secondary: {
  				bg: 'var(--secondary-bg)',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			header: {
  				bg: 'var(--header-bg)'
  			},
  			section: {
  				bg: 'var(--section-bg)',
  				header: 'var(--section-header)'
  			},
  			'bottom-bar': {
  				bg: 'var(--bottom-bar-bg)'
  			},
  			subtitle: 'var(--subtitle)',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			separator: 'var(--separator)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		borderColor: {
  			DEFAULT: 'var(--tg-theme-section-separator-color)'
  		},
  		ringColor: {
  			DEFAULT: 'var(--tg-theme-button-color)'
  		},
  		backgroundImage: {
  			'tg-button': 'var(--tg-theme-button-color)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			rainbow: 'rainbow var(--speed, 2s) infinite linear',
			  'spin-slow': 'spin 3s linear infinite',
  		},
  		keyframes: {
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			},
  			'bounce-x': {
  				'0%, 100%': { transform: 'translateX(-10%)' },
  				'50%': { transform: 'translateX(10%)' },
  			},
  			'aurora-border': {
  				'0%, 100%': {
  					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
  				},
  				'25%': {
  					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
  				},
  				'50%': {
  					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
  				},
  				'75%': {
  					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
  				}
  			},
  			'aurora-1': {
  				'0%, 100%': {
  					top: '0',
  					right: '0'
  				},
  				'50%': {
  					top: '50%',
  					right: '25%'
  				},
  				'75%': {
  					top: '25%',
  					right: '50%'
  				}
  			},
  			'aurora-2': {
  				'0%, 100%': {
  					top: '0',
  					left: '0'
  				},
  				'60%': {
  					top: '75%',
  					left: '25%'
  				},
  				'85%': {
  					top: '50%',
  					left: '50%'
  				}
  			},
  			'aurora-3': {
  				'0%, 100%': {
  					bottom: '0',
  					left: '0'
  				},
  				'40%': {
  					bottom: '50%',
  					left: '25%'
  				},
  				'65%': {
  					bottom: '25%',
  					left: '50%'
  				}
  			},
  			'aurora-4': {
  				'0%, 100%': {
  					bottom: '0',
  					right: '0'
  				},
  				'50%': {
  					bottom: '25%',
  					right: '40%'
  				},
  				'90%': {
  					bottom: '50%',
  					right: '25%'
  				}
  			}
  		},
  		fontFamily: {
  			sans: ['DynaPuff', 'sans-serif'],
  			mono: ['DynaPuff', 'monospace'],
  		},
  	}
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
