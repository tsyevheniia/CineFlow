const express = require("express");
const connection = require("./db.js")
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "/public")))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap-icons')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.json());
app.use(express.text());
app.post("/api/registration", (req, res) => {
    const user = req.body;

    connection.query(`SELECT * FROM Users WHERE email = '${user.email}'`, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "server error" });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: "This email is already registered" });
        }

        connection.query(
            `INSERT INTO Users VALUES ('${user.username}','${user.email}','${user.password}', NOW())`,
            (err) => {
                if (err) {
                    return res.status(500).json({ message: "server error" });
                }

                return res.status(201).json({ message: "User registered successfully" });
            }
        );
    });
});
app.post("/api/main", (req,res)=>{
    const email = req.body;
    connection.query(`select * from Users where email = '${email}'`, (err,results,fields)=>{
        if (err) {
            return res.status(500).json({ message: "server error" });
        }

        if (results.length > 0) {
            return res.sendStatus(200);
        } else {
            return res.sendStatus(400);
        }
    });
})
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "missing fields" });
    }

    connection.query(
        `SELECT * FROM Users WHERE email = '${email}'`,
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "server error" });
            }

            if (!result || result.length === 0) {
                return res.status(404).json({ message: "user not found" });
            }

            if (result[0].password !== password) {
                return res.status(401).json({ message: "wrong password" });
            }

            return res.status(200).json({
                username: result[0].username,
                email: result[0].email,
                registrationDate: result[0].registrationDate
            });
        }
    );
});
app.listen(port, ()=>{
    console.log("Server is running")
})
