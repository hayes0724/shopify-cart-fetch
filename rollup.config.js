// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.esm.ts',
    output: [
        {
            file: 'dist/index.min.js',
            format: 'cjs',
            plugins: [
                terser({
                    ecma: 2017,
                    module: true,
                    warnings: true,
                    mangle: {
                        properties: {
                            regex: /^__/,
                        },
                    },
                }),
            ]
        },
        {
            file: 'dist/index-es.js',
            format: 'esm'
        },
    ],
    plugins: [
        typescript(),
        nodeResolve(),
        summary(),
    ]
};
