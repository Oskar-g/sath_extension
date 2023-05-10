const express = require("express")
const PORT = 8118
const HOST = '127.0.0.1'
const STATICS = "src"

const app = express()

app.use(express.static(STATICS))
app.get("/", (req, res) => { })

app.listen(PORT, HOST, () => console.log(`server started at ${HOST}:${PORT}`))