const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'justin06',
    database: 'QUIZCHAMPdatabase',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get/quizzes', (req, res) => {

    const sqlSelect = 
    "SELECT * FROM quizzes"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/api/quizzes", (req, res) => {
    
    const quizImage = req.body.quizImage
    const quizName = req.body.quizName
    const quizCategory = req.body.quizCategory

    const sqlInsert = "INSERT INTO quizzes (quizImage, quizName, quizCategory) VALUES (?,?,?)"
    db.query(sqlInsert, [quizImage, quizName, quizCategory], (err, result) => {
        console.log(result)
    })
})




app.listen(2000, () => {
    console.log("Running on port 2000.")
})