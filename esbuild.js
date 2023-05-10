import esbuild from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

esbuild
  .build({
    entryPoints: [
      './src/index.ts',
      './src/SkeletonElements/Row.tsx',
      './src/SkeletonElements/Circle.tsx',
      './src/SkeletonElements/ImageLoader.tsx',
      './src/SkeletonElements/StyleProvider.tsx',
      './src/SkeletonElements/TabLoader.tsx',
      './src/SkeletonElements/BarChartLoader.tsx'
    ],
    outdir: './dist',
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    format: 'cjs',
    sourcemap: false,
    target: 'node16',
    plugins: [nodeExternalsPlugin()]
  })
  .catch(() => process.exit(1))
