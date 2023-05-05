const express = require('express')
const app = express()

app.use(express.static(__dirname + '/navbar-app'))
app.get('/json', (req, res) => {
    res.json([{ name: "Aditya" }])
})
// app.get('/', (req, res) => {
//     res.status(200).send('Hi')
// });
// app.get('/about', (req, res) => {
//     res.status(200).send('About')
// });
// app.all(' *', (req, res) => {
//     res.status(404).send('404')
// });
// app.get methods in express
// app.post methods in express
// app.put methods in express
// app.delete methods in express
// app.all methods in express
// app.use methods in express
// app.listen methods in express

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:${5000}`);
});