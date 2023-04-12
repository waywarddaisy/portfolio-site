const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static("Public"))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/index.html"))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/about.html"))
})
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/projects.html"))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/contact.html"))
})
app.get('/project-page', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/project-page.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})