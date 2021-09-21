import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'

import packageJson from '../package.json'

export default {
  input: 'packages/index.ts',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true
    }
  ],
  plugins: [
    json(),
    peerDepsExternal(),
    resolve(),
    typescript({
      tsconfig: 'packages/tsconfig.json'
    }),
    vue(),
    commonjs(),
    postcss()
  ]
}