import 'dotenv/config';
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/gaming", (req, res) => {
    res.send(`<h1>Welcum to Gamer's world</h1>`);
    // res.send(process.env.PORT);
    // res.send(process.env.name);
    // res.send(process.env.class);
});

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port num. : ${process.env.PORT}`);
});

console.log(process.env.PORT);
console.log(process.env.name);
console.log(process.env.class);