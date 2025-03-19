const express = require('express')
const app = express()
const cors = require('cors')
require('./utils/config')
const Blogs = require('./controllers/blogs')

app.use(cors())
app.use(express.json())
app.use('/api/blogs', Blogs)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})