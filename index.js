const express = require('express')
const mysql = require('mysql2')
const bookRoute = require('./routes/book')
const authorRoute = require('./routes/author')
const dbConfig = require('./config/database')
const pool = mysql.createPool(dbConfig)
const authRouter = require('./routes/auth')
const authenticateJWT = require('./middleware/auth')
const cors = require('cors')

pool.on('error', (err) => {
    console.log(err)
})

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/auth', authRouter)
app.use('/book', authenticateJWT, bookRoute)
app.use('/author', authorRoute)

//membuat parameter harus diawali : diawal
app.get('/contohparameter/:username/:jurusan/:kelas', (req, res) => {
    res.json(req.params)
})

app.get('/contohparam', (req, res) => {
    res.json(req.query)
})

app.get('/', (req, res) => {
    res.write('Hello world')
    res.end()
})

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})