const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

// app.get('/', function (req, res) {
//     res.render('index.html');
// });

app.listen(3000, () => {
console.log(`Server is up and running on port ${port}`);
});
