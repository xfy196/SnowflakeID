import rollupConfig from "./rollup.config"
export default {...rollupConfig, output: {
    ...rollupConfig.output,
    format: "esm",
    file: "./dist/SnowflakeID.esm.js",
    name: "SnowflakeID.esm.js"
}}