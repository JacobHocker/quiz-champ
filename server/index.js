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

//! QUESTION ROUTES

//! POST QUESTION
app.post("/api/post/questions", (req, res) => {
    
    const quizId = req.body.quizId
    const questionContent = req.body.questionContent
    const questionImage = req.body.questionImage
    const choiceOne = req.body.choiceOne
    const choiceTwo = req.body.choiceTwo
    const choiceThree = req.body.choiceThree
    const choiceFour = req.body.choiceFour
    const correctAnswer = req.body.correctAnswer

    const sqlInsert = 
    "INSERT INTO quizzes (quizId, questionContent, questionImage, choiceOne, choiceTwo, choiceThree, choiceFour, correctAnswer) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sqlInsert,
        [quizId, questionContent, questionImage, choiceOne, choiceTwo, choiceThree, choiceFour, correctAnswer], 
        (err, result) => {
        console.log(result)
    })
})
//! GET ALL QUESTIONS BY QUIZ ID
app.get('/api/get/questions/:quizId', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM questions WHERE quizId = ?"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

//! QUIZ ROUTES

//! GET ALL QUIZZES
app.get('/api/get/quizzes', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM quizzes"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

//! POST QUIZ
app.post("/api/post/quizzes", (req, res) => {
    
    const quizImage = req.body.quizImage
    const quizName = req.body.quizName
    const quizCategory = req.body.quizCategory
    const quizDescription = req.body.quizDescription

    const sqlInsert = "INSERT INTO quizzes (quizImage, quizName, quizCategory, quizDescription) VALUES (?,?,?,?)"
    db.query(sqlInsert, [quizImage, quizName, quizCategory, quizDescription], (err, result) => {
        console.log(result)
    })
})




app.listen(2000, () => {
    console.log("Running on port 2000.")
})