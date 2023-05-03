const express = require('express')
const app = express()

app.get('/', () => {

});

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