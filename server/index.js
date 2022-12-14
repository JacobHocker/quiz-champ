const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const mysql = require('mysql2');
const { urlencoded } = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'justin06',
    database: 'QUIZCHAMPdatabase',
});

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "nalaHocker",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }

}))


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//! USER ROUTES
//? REGISTER USER
app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const bio = req.body.bio 
    const crowns = req.body.crowns 

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO users (username, password, bio, crowns) VALUES (?,?,?,?)", 
            [username, hash, bio, crowns], (err, result) => {
            console.log(result)
        })
    })
})

//? GET LOGIN USER
app.get("/login", (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user })
    } else {
        res.send({loggedIn: false})
    }
})
// ? POST LOGIN USER
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ?;", 
        username, 
        (err, result) => {
            if (err) {
                res.send({err: err})
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result
                        res.send(result)
                    } else {
                        res.send({message: "Wrong Username/Password Combination"})
                    }
                })
            } else {
                res.send({message: "User doesn't exist."})
            }
            
        })
})

//! QUESTION ROUTES

//? POST QUESTION
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
    "INSERT INTO questions (quizId, questionContent, questionImage, choiceOne, choiceTwo, choiceThree, choiceFour, correctAnswer) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [quizId, questionContent, questionImage, choiceOne, choiceTwo, choiceThree, choiceFour, correctAnswer], 
        (err, result) => {
        console.log(err)
    })
})
//? GET ALL QUESTIONS BY QUIZ ID
app.get('/api/get/questions/:quizId', (req, res) => {
    const quizId = req.params.quizId
    const sqlSelect = "SELECT * FROM questions WHERE quizId = ?"
    db.query(sqlSelect, quizId, (err, result) => {
        res.send(result)
    })
})

//! QUIZ ROUTES

//? GET ALL QUIZZES
app.get('/api/get/quizzes', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM quizzes"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})
//? GET QUIZ BY ID
app.get('/api/get/quiz/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT * FROM quizzes WHERE id = ?"
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    })
})
//? POST QUIZ
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