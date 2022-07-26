const express = require("express");

const app = express();
const port = 8000

//shows up in website
app.get("/", (req, res) => {
    return res.send("Home Page");
});

app.get("/signup", (req, res) => {
    return res.send("You are visiting signup route");
});

app.get("/signout", (req, res) => {
    return res.send("You're signed out");
});

app.get("/raja", (req, res) => {
    return res.send("Bhaina");
});
const admin = (req, res) => {
    return res.send("youre");
};

const isAdmin = (req, res, next) => {
    console.log("isAdmin")
    next();
};

const isLoggedIn = (req, res, next) => {
    console.log("logg")
    next();
};

app.get("/admin", isLoggedIn, isAdmin, admin);

//shows up in console
app.listen(port, () => {
    console.log("Server is up and running...")
})


// const port = 3000

// app.get('/', (req, res) => {res.send('Hello World!')})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

