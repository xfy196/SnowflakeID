nodejs的分布式id解决方案 参考Twitter的snowflake
```js
const SnowflakeID = require("SnowflakeID")
const sid = new SnowflakeID()
let arr = []
for(let i = 0; i < 10000; i++){
    arr.push(sid.generate())
}
console.log(arr)
```