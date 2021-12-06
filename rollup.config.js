const resolve = require("rollup-plugin-node-resolve")
const commonjs = require("rollup-plugin-commonjs")
const typescript = require("rollup-plugin-typescript2")
export default {
    input: "./src/main.ts",
    output: {
        file: "./dist/SnowflakeID.js",
        format: "esm",
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs()
    ]
}