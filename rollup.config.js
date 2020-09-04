import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from '@rollup/plugin-replace'
import html from 'rollup-plugin-html'
import json from 'rollup-plugin-json'
import lintrc from './.eslintrc.json'

const format = 'iife'                                           // runtime: browser
const input = 'src/app/mount.js'                                // input
const file = 'public/bundle.js'                                 // target output
const name = process.env.npm_package_name.split("-").join("")   // making it namesafe for JS
const sourcemap = process.env.NODE_ENV === 'development'

export default {
    input,    
    plugins: [
        svelte({
            include: 'src/app/svelte/**/*.html',
            exclude: 'src/app/**/*.svelte',
            css: css => css.write('svelte.css')
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),        
        // html({ include: './src/app/svelte/*.html' }),
        json({ include: 'src/app/*.json' }),
        commonjs(),
        replace(),
        serve({ open: true, contentBase: 'public', port: 5000, host: 'localhost', }),
        livereload(),
    ],
    output: { format, name, file, sourcemap }
}