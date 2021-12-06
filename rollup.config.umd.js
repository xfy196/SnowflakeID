import rollupConfig from "./rollup.config"
export default {...rollupConfig, output: {
    ...rollupConfig.output,
    format: "umd",
    file: "./dist/SnowflakeID.umd.js",
    name: "SnowflakeID.umd.js"
}}