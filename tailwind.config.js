/** @type {import('tailwindcss').Config} */
export default {
  // 1. Cobertura completa de pastas (inclui componentes, páginas e mdx)
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 2. Cores e tokens de superfície para Dark Premium
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          DEFAULT: '#050507',
          card: '#090a0d',
          input: '#121215',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },

      // 3. Tipografia estendida
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },

      // 4. Sombras Glassmorphic e Brilhos de Luz (Glows)
      boxShadow: {
        'glass-card': '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
        'glass-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glow-white': '0 0 25px rgba(255, 255, 255, 0.18)',
        'glow-subtle': '0 0 50px -10px rgba(255, 255, 255, 0.05)',
      },

      // 5. Gradients para Spotlights, Grids e Efeitos de Luz
      backgroundImage: {
        'spotlight-radial':
          'radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)',
        'grid-pattern':
          'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
        'glass-linear':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },

      // 6. Arredondamentos customizados para cards modernos
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // 7. Keyframes para Micro-interações
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.25', transform: 'scale(0.98)' },
          '100%': { opacity: '0.45', transform: 'scale(1.02)' },
        },
      },

      // 8. Classes de animação utilitárias
      animation: {
        fadeIn: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideUp: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};