// rollup.config.ts
import del from 'rollup-plugin-delete'
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    typescript()
  ],
  external: [],
};
