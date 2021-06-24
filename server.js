const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./model/index");
const foodRouter = require('./router/food.router')


const app = express();

app.use(cors());

// trả về data dạng Json
app.use(bodyParser.json());

//trả về url dạng mã hóa
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

//router đơn giản
app.get('/', (req, res) => {
    res.json({ message: 'đã connect food data!' })
})

// app.post('/upload', (req, res) => {
//     console.log(res)
// })

require("./router/food.router")(app);

// set port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('connect in PORT 4000!');
})