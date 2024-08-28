import { defineConfig, Options } from "tsup";

const filterDts = (
  options: Parameters<NonNullable<Options["esbuildOptions"]>>[0]
) => {
  if (Array.isArray(options.entryPoints)) {
    options.entryPoints = options?.entryPoints?.filter(
      (entry) => !(entry as string).endsWith(".d.ts")
    ) as string[];
  }
};

export default defineConfig([
  {
    entry: ["./src/index.ts"],
    outDir: "dist/cjs",
    format: "cjs",
    dts: false,
    sourcemap: true,
    clean: true,
    bundle: true,
    shims: true,
    tsconfig: "./tsconfig.build.json",
    esbuildOptions: (options) => {
      filterDts(options);
    },
  },
  {
    entry: ["src/**/*.ts"],
    splitting: true,
    sourcemap: true,
    outDir: "dist/es",
    format: "esm",
    dts: false,
    treeshake: true,
    clean: true,
    bundle: false,
    shims: true,
    tsconfig: "./tsconfig.build.json",
    esbuildOptions: (options) => {
      filterDts(options);
    },
    outExtension({ format }) {
      return {
        js: ".js",
      };
    },
  },
  {
    entry: ["src/**/*.ts"],
    splitting: true,
    target: "es6",
    dts: {
      only: true,
    },
    treeshake: true,
    clean: true,
    bundle: false,
    shims: true,
    tsconfig: "./tsconfig.build.json",
    esbuildOptions: (options) => {
      filterDts(options);
    },
  },
]);
