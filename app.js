const express = require('express');
const app = express();


const bodyparser = require("body-parser")



const PORT = process.env.PORT || 8000;
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));
app.set("veiw engine", "ejs");




app.get('/movies', (req, res, next) => {
    res.render("movies.ejs")
})


app.get('/Theboys', (req, res, next) => {
    res.render("Theboys.ejs")
})


app.get('/AntMan', (req, res, next) => {
    res.render("AntMan.ejs")
})








app.use((req, res, next) => {
    res.status(200).json ({
        message: "hello its working"
    });
});

app.use((req, res, next) => {
    const error = new error ("not available")
    error.status = 404
    next(error)
})



app.listen(PORT, () => console.log ("server listening on port " + PORT))