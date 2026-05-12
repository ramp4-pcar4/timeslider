import { defineConfig, mergeConfig } from 'vite';
import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import ViteMinifyEsPlugin from './scripts/vite-minify-es-plugin';
import dsv from '@rollup/plugin-dsv';
import pkg from './package.json';

const distName = resolve(__dirname, process.env.DIST_NAME || 'dist');

const browserBuildDefines = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

const baseConfig: UserConfig = {
    plugins: [vue(), dsv()],
    define: {
        'process.env': process.env
    },
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    build: {
        target: 'esnext',
        emptyOutDir: false,
        outDir: distName,
        sourcemap: false,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'timeslider',
            cssFileName: 'timeslider'
        },
        rolldownOptions: {
            external: ['vue', 'ramp-pcar'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    server: {
        open: '/demo/index.html'
    }
};

function inlineConfig() {
    return mergeConfig(baseConfig, {
        define: browserBuildDefines,
        build: {
            sourcemap: true,
            lib: {
                fileName: (format: string) => `timeslider.browser.${format}.js`,
                formats: ['es', 'iife']
            },
            rolldownOptions: {
                output: {
                    codeSplitting: false
                }
            }
        }
    });
}

function esDynamicConfig() {
    const config = mergeConfig(baseConfig, {
        define: browserBuildDefines,
        build: {
            outDir: `${distName}/esDynamic`,
            copyPublicDir: false,
            sourcemap: true,
            lib: {
                fileName: `timeslider`,
                formats: ['es']
            }
        },
        rolldown: { legalComments: 'none' }
    });
    config.plugins.push(ViteMinifyEsPlugin());
    return config;
}

/* function npmBundleConfig() {
    const externalImports = Object.keys(pkg.dependencies).map(dep => new RegExp(`^${dep}`));

    const config = mergeConfig(baseConfig, {
        define: browserBuildDefines,
        build: {
            outDir: `${distName}/bundler`,
            copyPublicDir: false,
            lib: {
                fileName: 'timeslider.bundle.es',
                formats: ['es']
            },
            rolldownOptions: {
                external: externalImports
            }
        }
    });
    return config;
} */

function testBuildConfig() {
    delete baseConfig.build!.rolldownOptions;
    delete baseConfig.build!.lib;

    const config = mergeConfig(baseConfig, {
        define: browserBuildDefines,
        root: 'demos',
        build: {
            outDir: `${distName}/demos`,
            copyPublicDir: true,
            rolldownOptions: {
                input: {
                    main: '/index.html'
                },
                output: {
                    // RAMP breaks if the code gets split in the demo
                    codeSplitting: false
                }
            }
        }
    });

    return config;
}

export default defineConfig(viteConfig => {
    const { command, mode } = viteConfig;
    if (command === 'build') {
        if (mode === 'esDynamic') {
            return esDynamicConfig();
        } else if (mode === 'inline') {
            return inlineConfig();
        } else {
            return testBuildConfig();
        }
    } else {
        return baseConfig;
    }
});
