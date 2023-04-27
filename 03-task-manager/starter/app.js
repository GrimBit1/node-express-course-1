const express = require('express')
const app = express()
const port = 3000
app.use(express.static(`${__dirname}/public`))
// Routes
app.get('/', (req, res) => {
    res.send("hi")
});

//Api Routes 
// get api/v1/tasks -get All the task
// post api/v1/tasks -post a task
// get api/v1/tasks/:id -get a certain task
// patch api/v1/tasks/:id -update a task
// delete api/v1/tasks -delete a task

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port)
})