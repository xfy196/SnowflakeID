import rollupConfig from "./rollup.config"
export default {...rollupConfig, output: {
    ...rollupConfig.output,
    format: "cjs",
    file: "./dist/SnowflakeID.cjs.js",
    name: "SnowflakeID.cjs.js"
}}