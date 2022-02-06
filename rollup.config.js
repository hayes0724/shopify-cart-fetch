import { nodeResolve } from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'dist/index.js',
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
    ],
    plugins: [
        nodeResolve({browser: true}),
        summary(),
    ]
};
