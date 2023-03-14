import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                teal: {
                    100: '#096',
                },
            },
            keyframes: {
                swingingLightBulb: {
                    '0%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                    '100%': { transform: 'rotate(-2deg)' },
                },
                toUp: {
                  '0%': { transform: 'translateY(20px)', opacity: 0.1 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 },
                },
                flashLightSlow: {
                    '0%': { opacity: 0},
                    '4%': { opacity: 0.9},
                    '10%': { opacity: 0.2},
                    '30%': { opacity: 0},
                    '35%': { opacity: 0.6},
                    '50%': { opacity: 0.7},
                    '55%': { opacity: 0.1},
                    '80%': { opacity: 0.9},
                    '86%': { opacity: 0},
                    '93%': { opacity: 0},
                    '100%': { opacity: 1},
                },
                flashLightMain: {
                    '0%': { opacity: 0.1},
                    '10%': { opacity: 0.5},
                    '80%': { opacity: 0},
                    '81%': { opacity: 0.2},
                    '100%': { opacity: 1},
                }
            },
            animation: {
                'swingingLightBulb': 'swingingLightBulb 1s infinite',
                'flashLight': 'flashLightSlow 900ms',
                'flashLightClassic': 'flashLightMain 3000ms',
                'toUp': 'toUp 600ms'
            }
        },
    },
    plugins: [formsPlugin],
})