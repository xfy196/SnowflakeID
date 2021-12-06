const SnowflakeID = require("../dist/SnowflakeID")
const sid = new SnowflakeID()
let arr = []
for(let i = 0; i < 10000; i++){
    arr.push(sid.generate())
}
console.log(arr)